// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
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

const signUp = document.getElementById("cadastro");
signUp.addEventListener("click", (event) => {
   event.preventDefault();
   const email = document.getElementById("Email").value;
   const password = document.getElementById("Senha").value;
   const nome = document.getElementById("Nome").value;
   const rua = document.getElementById("Rua").value;
   const numero = document.getElementById("Numero").value;
   const telefone = document.getElementById("telefone").value;
   

   const auth=getAuth();
   const db=getFirestore();

   createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
      const user=userCredential.user;
      const userData={
         email: email,
         nome: nome,
         rua: rua,
         numero: numero,
         telefone: telefone
      };
      alert("Conta criada com Sucesso");
      const docRef=doc(db, "users",user.uid);
      setDoc(docRef, userData)
      .then(() =>{
         window.location.href="login.html";
      })

      .catch((error) =>{
         console.error("erro no documento ", error);
      });
   })
   .catch((error) => {
      const errorCode=error.code;
      if(errorCode== "auth/email-already-in-use"){
         alert("Este email já está cadastrado");
      }
      else{
         alert("crie uma conta ");
      }
   })
});
