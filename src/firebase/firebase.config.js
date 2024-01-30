// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey ,
  // authDomain: import.meta.env.VITE_authDomain ,
  // projectId: import.meta.env.VITE_projectId ,
  // storageBucket: import.meta.env.VITE_storageBucket ,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId ,
  // appId: import.meta.env.VITE_appId 


  apiKey : "AIzaSyA8D6RRJ7xXnb09FkZTUAbjj3dpxgbi2UY",
  authDomain : "stay-vista-management.firebaseapp.com",
  projectId : "stay-vista-management",
  storageBucket : "stay-vista-management.appspot.com",
  messagingSenderId : "1015214008731",
  appId : "1:1015214008731:web:fbf9d7389ee07194ee993e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth ;