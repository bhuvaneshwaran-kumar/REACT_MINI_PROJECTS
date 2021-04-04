import firebase from "firebase/app"
import 'firebase/firestore'


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCEm-KQ2ahdHPq3ZXgT1El_yzSkrRTHoyU",
    authDomain: "messenger-app-26f50.firebaseapp.com",
    databaseURL: "https://messenger-app-26f50.firebaseio.com",
    projectId: "messenger-app-26f50",
    storageBucket: "messenger-app-26f50.appspot.com",
    messagingSenderId: "364031062075",
    appId: "1:364031062075:web:929896740f5868ea3dec1e"
})

if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

export const getTimestamp = () => firebase.firestore.FieldValue.serverTimestamp()