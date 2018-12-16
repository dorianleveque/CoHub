import firebase, { auth, database } from '../firebase'
import User from './User';
/**
 * Cette classe remplace notre première version 
 * de classe prénommé "Login"
 * Seulement le nom authentication convient beaucoup
 * mieux et évite les confusions
 */
class Authentification {

    #currentUser;
    #authStateChangedCallback;

    constructor() {
        this.#currentUser = null             // User Object
        this.#authStateChangedCallback = []  // callback list

        /**
         *  Ceci est un évenement qui se déclenche lorsque l'authentification
         *  de firebase à été modifié.
         *  Ainsi lors d'une connection, d'une inscription ou d'une déconnection
         *  réussite, la fonction associé à cet évênement est executé.
         */
        auth.onAuthStateChanged(async (auth) => {
            /**
             * Pour déterminer une authentification réussite et que l'objet currentUser soit
             * créé, il faut que ses infos auprès de la base de données puissent être récupérées et
             * que l'authentification auprès de firebase soit correcte
             */

            // Si l'authentification de firebase est valide
            if (auth) {
                try {
                    // on essaye de récupérer les données de l'utilisateur depuis la base de donnée,
                    // puis on crée notre currentUser
                    const { id, name, surname, email, nickname } = await this._retriveUserData(auth.email)
                    this._setCurrentUser(new User(id, name, surname, email, nickname))

                    this.#authStateChangedCallback.forEach(element => { element() })
                }
                catch(error) {
                    // si on arrive pas à créer le currentUser, on met à jour
                    // l'attribut pour l'authentification (router)
                    this._setCurrentUser(null)
                }
            }
            else {
                // Si l'authentification de firebase est invalide
                // impossible de vérifier si l'authentification est correct
                this._setCurrentUser(null)
            }
            this.#authStateChangedCallback.forEach(element => { element() })
        })
    }

    /**
     * Récupère l'ensembles des données de l'utilisateur à partir de son adresse mail
     * @param {String} email adresse mail
     * @returns retourne un Objet avec l'ensemble des données de l'utilisateur
     */
    async _retriveUserData(email) {
        try {
            const snapshot = await database.ref('Users').orderByChild('email').equalTo(email).once('value')
            if (snapshot.hasChildren()) {
                let data = null
                snapshot.forEach((childSnapshot) => {
                    const id = childSnapshot.key
                    const { name, surname, email, nickname } = childSnapshot.val()
                    data = { id, name, surname, email, nickname }
                })
                return data
            }
            else {
                throw { 
                    code: "user-data-not-found",
                    message: "Aucune données utilisateur n'a été trouvé à partir de cet adresse mail"
                }
            }
        }
        catch(error) {
            throw error
        }
    }


    getCurrentUser() {
        return this.#currentUser
    }

    _setCurrentUser(user) {
        this.#currentUser = user
    }

    /**
     * Ajoute une fonction qui sera executé à chaque fois que les infos
     * d'authentification sont modifiés
     * @param {function} func référence de la fonction à executer
     * @return retourne la fonction passer en paramètre
     */
    onAuthStateChanged(func){
        this.#authStateChangedCallback.push(func)
        return func
    }

    /**
     * Supprime l'execution de la fonction fourni en paramètre
     * lorsque l'évènement onAuthStateChanged se produit
     * @param {function} func référence de la fonction à supprimer
     */
    removeCallbackOnAuthStateChanged(func){
        const index = this.#authStateChangedCallback.findIndex(function(element) {
            return element === this
        }, func)
        // on supprime la fonction de la liste callback
        this.#authStateChangedCallback.slice(index, 1)
    }

    /**
     * Créé une authentification à l'aide d'un email et d'un mot de passe
     * @param {String} email adresse mail
     * @param {String} password mot de passe
     * @param {Boolean} remember la session est conservé même après fermeture de la page si vrai (true) sinon la session est détruite
     */
    async connect(email, password, remember=false) {
        /**
         * On récupère les informations de l'utilisateur depuis firebase
         * afin de vérifier que ses infos sont biens disponibles.
         * Puis on le connecte à l'aide de firebase
         */
        auth.setPersistence(
            (remember)
            ? firebase.auth.Auth.Persistence.LOCAL
            : firebase.auth.Auth.Persistence.SESSION
        )
        await this._retriveUserData(email)
        await auth.signInWithEmailAndPassword(email, password)
    }

    /**
     * Créé un compte à l'aide d'une adresse mail,
     * d'un mot de passe et de toutes les autres infos 
     * de l'utilisateur
     * @param {String} lastName nom de famille
     * @param {String} firstName prénom
     * @param {String} nickName surnom
     * @param {String} email adresse mail
     * @param {String} password mot de passe
     */
    async createAccount(lastName, firstName, nickName, email, password) {
        /**
         * Pour créer un compte, on vérifie dans un premier temps si l'adresse mail est 
         * déjà utilisé par un autre compte. 
         * Si c'est le cas on renvoie une erreur.
         * Sinon une erreur sera relevé lors de la récupération des informations de l'utilisateur
         * puisque les infos n'existeront pas. Comme l'authentification n'existera pas, 
         * on créé un nouveau user à l'aide d'un nouvel id fraichement généré.
         * Puis on sauvegarde l'authentification dans firebase
         */
        try {
            await this._retriveUserData(email)
            throw {
                code: "auth/email-already-in-use",
                message: "L'adresse mail est déjà utilisée par un autre compte"
            }
        }
        catch (error){
            if (error.code === "user-data-not-found") {
                // Aucune donnée utilisateur => on crée un utilisateur et on le sauvegarde
                let userId = database.ref().child('Users').push().key
                let user = new User(userId, firstName, lastName, email, nickName)
                await user.save()
                await auth.createUserWithEmailAndPassword(email, password)
            }
            else {
                throw error
            }
        }
    }

    /**
     * Envoi un email afin de reset son mot de passe
     * @param {String} email adresse mail
     */
    async resetPassword(email) {
        await auth.sendPasswordResetEmail(email)
    }

    /**
     * Confirme et enregistre le nouveau mot de passe de l'utilisateur
     * @param {String} code code identification fourni dans l'email
     * @param {String} newPassword nouveau mot de passe
     */
    async confirmPasswordReset(code, newPassword) {
        await auth.confirmPasswordReset(code, newPassword)
    }

    /**
     * Déconnecte l'utilisateur de l'application
     */
    async disconnect() {
        this._setCurrentUser(null)
        await auth.signOut()
    }

    /**
     * Vérifie si l'authentification est valide
     * @return vrai (true) si l'authentification est valide
     */
    isConnected() {
        return this.getCurrentUser() ? true : false
    }

}

export default Authentification
