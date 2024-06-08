import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import {getFirestore, getDoc, doc,collection, getDocs} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";


//const userMobile = document.querySelector("#userIcon")
//let UserIcon = document.querySelector("#user-icon");
//os dois faz verificaçao quando clica no icone de usurio
//userMobile.addEventListener("click", userLogado)

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


//const cliee = document.querySelector("#cliente");
//cliee = document.getElementById("name").value;

//parte para click e verifica se esta logado e dicidir qual janela ir
//let Entrar = document.querySelector("#user");


   

/*UserIcon.addEventListener("click", () => {

    userLogado();
})*/


///--------------------------------





//funçao para verficar se usuario esta logado
/*onAuthStateChanged(auth, (user) => {
    const loggedInUserId = localStorage.getItem("loggedInUserId");
    if(loggedInUserId){
        //passando os passos
        //alert("usuario logado");
       // window.location.href="conta.html"
        logado.textContent = "Bem Vindo";
    }
})*/

/*logado();
function logado(){
    onAuthStateChanged(auth, (user) => {
        if (user) {
         
         // const uid = user.uid;
          alert("usuaro logao", uid);

          console.logado(uid)
          // ...
        } else {
          // User is signed out
          // ...
          alert("usuario nao logado")
        }
      });

}*/
/*
const imagens = document.getElementById("image")

// traz dados do firesstore
const querySnapshot = await getDocs(collection(db, "products"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  const data = doc.data();
  console.log(data.image);
 //imagens.src = data.image;
});



*/


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

//logoutButon.addEventListener("click", sair);


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


/*
Finalizar.onclick = () => {
    //Container.classList.add("active");
finalizar();
};*/

