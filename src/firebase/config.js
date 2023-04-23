// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEo8jdkVhoWAvHTMfBPoLkwvVk7IBdwX0",
  authDomain: "miniblog-fb49f.firebaseapp.com",
  projectId: "miniblog-fb49f",
  storageBucket: "miniblog-fb49f.appspot.com",
  messagingSenderId: "127549153613",
  appId: "1:127549153613:web:4f22adf9392c2a8c209704"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };