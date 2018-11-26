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
        //.setPersistence(firebase.auth.Auth.Persistence.SESSION)
        this.authStateChangedCallback = []//()=>{}    // callback

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
     * Permet d'ajouter une fonction qui sera executé à chaque fois que les infos
     * d'authentification sont modifiés
     * @param {function} func référence de la fonction à executer
     * @returns {function} retourne la fonction passer en paramètre
     */
    onAuthStateChanged(func){
        this.authStateChangedCallback.push(func)
        return func
    }

    /**
     * Permet de supprimer l'execution de la fonction fourni en paramètre
     * lorsque l'évènement onAuthStateChanged se produit
     * @param {function} func référence de la fonction à supprimer
     */
    removeCallbackOnAuthStateChanged(func){
        const index = this.authStateChangedCallback.findIndex(function(element) {
            return element == this
        }, func)
        // on supprime la fonction de la liste callback
        this.authStateChangedCallback.slice(index, 1)
    }

    /**
     * Permet de s'authentifier à l'aide d'un email et d'un mot de passe
     * @param {String} email adresse mail
     * @param {String} password mot de passe
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
     * Permet de se créer un compte à l'aide d'une adresse mail et
     * d'un mot de passe
     * @param {String} email adresse mail
     * @param {String} password mot de passe
     */
    async createUserWithEmailAndPassword(email, password) {
        await auth.createUserWithEmailAndPassword(email, password)
    }

    /**
     * Permet de se déconnecter 
     */
    async signOut() {
        await auth.signOut()
    }
    

    /**
     * Permet de vérifier si l'authentification est valide
     * Renvoie true si connection valide
     * Renvoie false si connection invalide
     */
    isValide() {
        return this.firebaseObject ? true : false
    }

}

export default Authentification