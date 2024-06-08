// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import {getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaPv_OzBN9vI20I0ynTaIZRsViD9fa3WE",
  authDomain: "borgestechlogin.firebaseapp.com",
  projectId: "borgestechlogin",
  storageBucket: "borgestechlogin.appspot.com",
  messagingSenderId: "769990569355",
  appId: "1:769990569355:web:48e3efddc44248fa30538e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



   
//--Login--
const signIn=document.getElementById("login");
signIn.addEventListener("click", (event) => {
   event.preventDefault();
   const email=document.getElementById("email").value;
   const password=document.getElementById("password").value;
   
   const auth=getAuth();

   signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
      alert("Login realizado com suscesso");
      const user=userCredential.user;
      localStorage.setItem("loggedInUserId", user.uid);
      window.location.href="index.html";

   })
   .catch((error) =>{
      const errorCode=error.code;
      if(errorCode==="auth/invalid-credential"){
         alert("Email ou senha incorreta");
      }
      else{
         alert("Essa conta nâo existe");
      }
   })

})



/*function entrar() {
   login();
   alert("funcionando");
}*/
/*
const Entrar=document.getElementById("login");
Entrar.addEventListener("click", ()=>{
    login();
    alert("funcionando");
    
})





const form = {
   email: () => document.getElementById("email"),
   password: () => document.getElementById("password"),
   login: () => document.getElementById("login")
}
*/






