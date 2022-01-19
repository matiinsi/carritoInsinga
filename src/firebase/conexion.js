import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: "AIzaSyDr5tfg5GTdtnyVbu3bzLEJTRoG5x4FKak",
  authDomain: "coderhouse-carrito.firebaseapp.com",
  projectId: "coderhouse-carrito",
  storageBucket: "coderhouse-carrito.appspot.com",
  messagingSenderId: "979363922290",
  appId: "1:979363922290:web:38165bf6489ec94acb5deb"
});

// Initialize Firebase
export function getFirebase() {
  return app
}

export function getFirestore() {
  return firebase.firestore(app)
}