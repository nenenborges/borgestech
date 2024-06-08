import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import {getFirestore, getDoc, doc,collection, getDocs} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";




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
const auth=getAuth();
const db=getFirestore();

const userMobile = document.querySelector("#userIcon");
let UserIcon = document.querySelector("#user-icon");
let Finalizar = document.querySelector(".btn-buy");


//os dois faz verificaçao quando clica no icone de usurio
userMobile.addEventListener("click", userLogado);
Finalizar.addEventListener("click", finalizar);
UserIcon.addEventListener("click", userLogado);




// gerenciar onde usuario deve ir caso logado e nao logado
function userLogado(){
    onAuthStateChanged(auth, (user) => {
        if (user) {
        //abre o pagamento
        window.location.href="conta.html"
        }
    else{
        //alert("Você não está logado entre com seu email e senha, ou crie uma conta")
        window.location.href="login.html"
    }
});
}
///--------#########################------------------

//se nao estiver logado nao finaliza



function finalizar(){
    onAuthStateChanged(auth, (user) => {
        if (user) {
        //abre o pagamento
        Container.classList.add("active");
        }
    else{
        alert("Você não está logado entre com seu email e senha, ou crie uma conta");
        window.location.href="login.html"
    }
});
}

















/*
const lista = document.querySelector("#pedido");

const ttal = document.querySelector("#tota");

listar();
function listar(){
    base.forEach((item) =>{
        linha = document.createElement("p");
        linha.innerHTML = item.quantity +" - "+ item.title;
        lista.appendChild(linha); 
    })
}*/