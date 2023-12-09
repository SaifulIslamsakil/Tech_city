// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1dmRxIMTDDpualvZbQzdR26qEaGD8h0M",
  authDomain: "tech-city-a2ea2.firebaseapp.com",
  projectId: "tech-city-a2ea2",
  storageBucket: "tech-city-a2ea2.appspot.com",
  messagingSenderId: "68634132486",
  appId: "1:68634132486:web:da81820d7a1c81fb368387"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
export default Auth