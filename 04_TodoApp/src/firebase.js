import firebase from "firebase"
// Your web app's Firebase configuration
// replace firebase keys here 👇
var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "1",
    appId: ""
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()  //firestore - Nosql

export default db

