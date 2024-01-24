// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzSz6JfGTBTFHc3Hsu0SXwGvyoK2kdFgs",
    authDomain: "fabric-and-fit.firebaseapp.com",
    projectId: "fabric-and-fit",
    storageBucket: "fabric-and-fit.appspot.com",
    messagingSenderId: "73494784413",
    appId: "1:73494784413:web:12f6b85bd2e688007ae774"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth

