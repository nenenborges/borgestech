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

//--------------------------------//
onAuthStateChanged(auth, (user) => {
    const loggedInUserId = localStorage.getItem("loggedInUserId");
    if(loggedInUserId){
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
        .then((docSnap)=> {
            if (docSnap.exists()){
                const userData=docSnap.data();
                document.getElementById("name").textContent=userData.nome;
                document.getElementById("rua").textContent=userData.rua;
                document.getElementById("phone").textContent=userData.telefone;
                document.getElementById("email-conta").textContent=userData.email;

            }
            else{
                console.log("nao existe essse dados com documentos")
            }
        })
        .catch((error) =>{
            console.log("Error getting document", error);
        })
    }
    else{
        console.log("User nao encontrado no local")  
    }
})


//chamando a funçao sair da conta
let logoutButon = document.getElementById("sair");
logoutButon.addEventListener("click", () => {
    
    sair();
})


//funçao sair da conta
function sair(){
    localStorage.removeItem("loggedInUserId");
    signOut(auth)
    .then(() => {
        window.location.href="index.html";
    })
    .catch((error)=>{
        console.error("error signIng out:", error)
    })
}

