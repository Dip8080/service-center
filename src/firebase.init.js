// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRtoKHbQP-M0uyDsuaRQefbCP_Sdv8nNM",
  authDomain: "personal-service-website.firebaseapp.com",
  projectId: "personal-service-website",
  storageBucket: "personal-service-website.appspot.com",
  messagingSenderId: "61976783703",
  appId: "1:61976783703:web:7b87ade8149bcc4c7d2c12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth 

