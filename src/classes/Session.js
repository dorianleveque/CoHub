import { firebase, auth } from '../firebase'

class Session {

    //#currentUser;
    //#authObject;

    constructor() {
        this.currentUser = null             // User Object
        this.firebaseObject = null          // Authentification Object firebase
        this.sessionReadyCallback = ()=>{}    // callback
        
        firebase.auth.onAuthStateChanged((auth) => {
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
            this.sessionReadyCallback()
        })
    }
    
    setAuth(auth) {
        this.firebaseObject = auth
    }

    whenSessionReady(func){
        this.sessionReadyCallback = func
    }

    connect(email, password) {
        auth.doSignInWithEmailAndPassword(email, password)
            .then(
                () => {

                }, 
                () => {

                }
            )

    }

    /**
     * Permet de vérifier si l'authentification est valide
     * Renvoie true si connection valide
     * Renvoie false si connection invalide
     */
    isConnected() {
        this.currentUser ? console.log(`Connect ${this.currentUser}`): console.log(`dis-Connect ${this.currentUser}`)
        return this.authObject ? true : false
    }

}

export default Session