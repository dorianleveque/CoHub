import firebase, { auth } from '../firebase'
/**
 * Cette classe remplace notre première version 
 * de classe prénommé "Login"
 * Seulement le nom authentication convient beaucoup
 * mieux et évite les confusions
 */
class Authentification {

    //#currentUser;
    //#authObject;

    constructor() {
        this.currentUser = null             // User Object
        this.firebaseObject = null          // Authentification Object firebase
        this.authStateChangedCallback = []  //()=>{}    // callback list

        auth.onAuthStateChanged((auth) => {
            if (auth) {
                console.log(`FIREBASE CONNECT - ${auth.email}`)
                // On crée ici l'object current User de notre application
                // à l'aide des infos de la database

                // on enregistre notre object dans notre session
                this.setAuth(auth)
            }
            else {
                console.log(`FIREBASE DISCONNECT`)
                this.setAuth(null)
            }
            this.authStateChangedCallback.forEach(element => { element() });
        })
    }

    setAuth(auth) {
        this.firebaseObject = auth
    }

    /**
     * Ajoute une fonction qui sera executé à chaque fois que les infos
     * d'authentification sont modifiés
     * @param {function} func référence de la fonction à executer
     * @return retourne la fonction passer en paramètre
     */
    onAuthStateChanged(func){
        this.authStateChangedCallback.push(func)
        return func
    }

    /**
     * Supprime l'execution de la fonction fourni en paramètre
     * lorsque l'évènement onAuthStateChanged se produit
     * @param {function} func référence de la fonction à supprimer
     */
    removeCallbackOnAuthStateChanged(func){
        const index = this.authStateChangedCallback.findIndex(function(element) {
            return element === this
        }, func)
        // on supprime la fonction de la liste callback
        this.authStateChangedCallback.slice(index, 1)
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
     * Créé un compte à l'aide d'une adresse mail et
     * d'un mot de passe
     * @param {String} email adresse mail
     * @param {String} password mot de passe
     */
    async createUserWithEmailAndPassword(email, password) {
        await auth.createUserWithEmailAndPassword(email, password)
    }

    /**
     * Envoi un email afin de reset son mot de passe
     * @param {String} email adresse mail
     */
    async sendPassWordResetWithEmail(email) {
        await auth.sendPasswordResetEmail(email)
    }

    /**
     * Déconnecte l'utilisateur de l'application
     */
    async signOut() {
        await auth.signOut()
    }
    
    /**
     * Met à jour les infos de son profil
     * @param {String} displayName Pseudo
     * @param {String} photoURL liens url avatar
     */
    async updateProfil(displayName='', photoURL='') {
        await auth.currentUser.updateProfile({ displayName, photoURL })
    }

    /**
     * Met à jour son mot de passe
     * @param {String} newPassword nouveau mot de passe
     */
    async updatePassword(newPassword) {
        await auth.currentUser.updatePassword(newPassword)
    }

    /**
     * Met à jour l'adresse mail
     * @param {String} newEmail nouvelle adresse mail
     */
    async updateEmail(newEmail) {
        await auth.currentUser.updateEmail(newEmail)
    }

    /**
     * Vérifie si l'authentification est valide
     * @return vrai (true) si l'authentification est valide
     */
    isValide() {
        return this.firebaseObject ? true : false
    }

}

export default Authentification