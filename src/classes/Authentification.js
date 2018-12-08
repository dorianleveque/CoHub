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
        this.#authStateChangedCallback = []  //()=>{}    // callback list

        auth.onAuthStateChanged((auth) => {
            if (auth) {
                // On crée ici l'object current User de notre application
                // à l'aide des infos de la database
                this._createCurrentUser(auth.email)
                .then( () => {
                    // si l'authentification est réussit et que le currentUser est créé
                    // on peut executer l'ensembles des fonctions callback
                    this.#authStateChangedCallback.forEach(element => { element() });
                })
                .catch( () => {
                    // si on arrive pas à créer le currentUser, on met à jour
                    // l'attribut pour l'authentification (router)
                    this._setCurrentUser(null)
                })
            }
            else {
                // si on n'a pas de connection avec firebase
                // impossible de vérifier si l'authentification est correct
                this._setCurrentUser(null)
            }
        })
    }

    /**
     * Créer l'objet currentUser à partir de l'ensemble de ses informations 
     * dans la base de données.
     * @param {String} email adresse mail
     */
    async _createCurrentUser(email) {
        await database.ref('Users').orderByChild('email').equalTo(email).once('value', (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const id = childSnapshot.key
                const { name, surname, email, nickname } = childSnapshot.val()
                this._setCurrentUser(new User(id, name, surname, email, nickname))
            })
        })
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
        await auth.signInWithEmailAndPassword(email, password);
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
        await auth.createUserWithEmailAndPassword(email, password).then( () => {
            // on crée l'objet User et on sauvegarde ses infos
            let user = new User(null, firstName, lastName, email, nickName)
            user.save()
            //this.#currentUser = user
        })
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