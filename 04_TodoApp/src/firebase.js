import firebase from "firebase"
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "replace your keys right here"
    authDomain: "replace your keys right here"
    projectId: "replace your keys right here"
    storageBucket: "replace your keys right here"
    messagingSenderId: "replace your keys right here"
    appId: "replace your keys right here"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore()

