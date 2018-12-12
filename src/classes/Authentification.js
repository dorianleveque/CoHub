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

        // événement lors d'une nouvelle reconnection avec firebase
        auth.onAuthStateChanged(async (auth) => {
            if (auth) {
                // On crée ici l'object current User de notre application
                // à l'aide des infos de la database
                try {
                    // si l'authentification est réussit
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
                // si on n'a pas de connection avec firebase
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
    async signInWithEmailAndPassword(email, password, remember=false) {
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
    async createUser(lastName, firstName, nickName, email, password) {
        // on crée l'authentification dans firebase
        await auth.createUserWithEmailAndPassword(email, password)
        // on crée l'objet User et on sauvegarde ses infos dans la base de données de firebase
        // si un id existe pour une adresse mail, alors pas besoin de générer un nouvel id
        let userId = null
        try {
            const { id } = await this._retriveUserData(email)
            userId = id
        }
        catch {
            userId = firebase.database().ref().child('Users').push().key
        }
        let user = new User(userId, firstName, lastName, email, nickName)
        await user.save()
    }

    /**
     * Envoi un email afin de reset son mot de passe
     * @param {String} email adresse mail
     */
    async sendPassWordResetWithEmail(email) {
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
    async signOut() {
        await auth.signOut()
    }

    /**
     * Vérifie si l'authentification est valide
     * @return vrai (true) si l'authentification est valide
     */
    isValide() {
        return this.getCurrentUser() ? true : false
    }

}

export default Authentification