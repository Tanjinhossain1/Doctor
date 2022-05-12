// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuCwdIYFSOF5R_ueyGhy4rk6IHMKzJO3Y",
  authDomain: "doctor-portal-1de28.firebaseapp.com",
  projectId: "doctor-portal-1de28",
  storageBucket: "doctor-portal-1de28.appspot.com",
  messagingSenderId: "162357115033",
  appId: "1:162357115033:web:3c332f90141af905396008"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;