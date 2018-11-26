import firebase from './firebase';

const auth = firebase.auth();
const database = firebase.database();

export default firebase 
export {
  auth,
  database
};