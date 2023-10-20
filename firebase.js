// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIM0moywUUlEYl5DnyK1PM42yjOD2tL3w",
  authDomain: "mycourier-af54d.firebaseapp.com",
  projectId: "mycourier-af54d",
  storageBucket: "mycourier-af54d.appspot.com",
  messagingSenderId: "742646447552",
  appId: "1:742646447552:web:a154a58214f0562577dc25",
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
