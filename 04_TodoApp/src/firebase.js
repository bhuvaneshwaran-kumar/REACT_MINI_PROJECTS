import firebase from "firebase"
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBIL0vsa_RGr6vhmCYEsLwK2eCX4MGY1bc",
    authDomain: "to-do-app----react.firebaseapp.com",
    projectId: "to-do-app----react",
    storageBucket: "to-do-app----react.appspot.com",
    messagingSenderId: "68356284541",
    appId: "1:68356284541:web:79d2d018f865dbfb425114"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()  //firestore - Nosql

export default db

