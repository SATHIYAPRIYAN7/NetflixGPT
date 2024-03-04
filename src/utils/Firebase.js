// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFdTcAZAMEQllENWCkDea-2EGue7PqjJY",
  authDomain: "netflixgpt-1166b.firebaseapp.com",
  projectId: "netflixgpt-1166b",
  storageBucket: "netflixgpt-1166b.appspot.com",
  messagingSenderId: "216661881265",
  appId: "1:216661881265:web:a415cf380d228010624d90",
  measurementId: "G-JHLKBSXPV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
