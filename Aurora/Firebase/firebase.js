import * as firebase from 'firebase';
import '@firebase/auth';
var app;
var firebaseConfig = {
//     add your firebase settings here
};
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
}

//sign up
export const authentication = firebase.auth();
export {firebase}
