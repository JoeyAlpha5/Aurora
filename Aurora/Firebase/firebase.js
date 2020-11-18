import * as firebase from 'firebase';
import '@firebase/auth';
var app;
var firebaseConfig = {
    apiKey: "AIzaSyCjDEHE_kuiaL3KQ0oWO9j6HwEaMb1j89g",
    authDomain: "aurora-1a3a6.firebaseapp.com",
    databaseURL: "https://aurora-1a3a6.firebaseio.com",
    projectId: "aurora-1a3a6",
    storageBucket: "aurora-1a3a6.appspot.com",
    messagingSenderId: "429890650699",
    appId: "1:429890650699:web:82b2695142b9d35d48c3ce",
    measurementId: "G-86VT90PKY3"
};
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
}

//sign up
export const authentication = firebase.auth();
export {firebase}