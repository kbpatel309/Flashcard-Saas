// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdDafBnNAHQqBy5g4Ikv2i-1Af1d4CtkQ",
  authDomain: "flashcard-saas-2111f.firebaseapp.com",
  projectId: "flashcard-saas-2111f",
  storageBucket: "flashcard-saas-2111f.appspot.com",
  messagingSenderId: "652826455432",
  appId: "1:652826455432:web:308789003aacb2db6ade3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}