import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {getDatabase, ref, set, get, child} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";

//dados do cliente
//import {getAuth} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
//import {getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";



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

  //get ref to database services
  const db = getDatabase(app);
  
  

//abrindo o pedido para confirmar pagamento
//Cart Open Close
let pedidoIcon = document.querySelector("#checkout-btn");
let Container = document.querySelector(".container-card");
let closePedido = document.querySelector("#checkout-voltar");
let pagamentoDinheiro = document.querySelector(".dinheiro");

//let verificar = document.querySelector(".total-price");


//Open Cart

//Close Cart
/*
closePedido.onclick = () => {
    Container.classList.remove("active");
   
};*/

// ########--captura o nome logado e e fixa no user---#############
let entrar = document.getElementById("entrar");
setTimeout(() =>{
    alar();
   
}, 2000);

//que percorre o id para pega o elemento
function alar(){
    let user = document.querySelectorAll("span#name");
    for (var i = 0; i < user.length; i++) {
        var produtos = user[i];
        var usuario = produtos.innerHTML //pega o texto
      
        entrar.textContent = usuario
    }
}
//-##############################################################3

var payment = ""
pagamentoDinheiro.addEventListener("click", () =>{
   payment = "Espécie"
   enviarPedido();
   window.location.href="sucess.html"
    
 });

//------pega o pedido feito para enviar
pedidoIcon.addEventListener("click", () =>{
   verificaf();
   
});
    
let pedido = []
function verificaf(){
    let itens = document.querySelectorAll("#pedido p.box");
    for (var i = 0; i < itens.length; i++) {
        var produtos = itens[i];
        //console.log("hjhdjdhsjdhj",(produtos.innerHTML))
        
       // console.log("pedido", produtos.innerHTML)
        pedido.push(produtos.innerHTML);
    }
}

//###########################################





/*
let testecliente = []
let teste = document.querySelectorAll(".entryarea span");
for (var i = 0; i < teste.length; i++) {
    var produtos = teste[i];
   //console.log(produtos)
    //pedido.push(produtos.innerHTML);
}
*/


//pegado o nome do usuario logado para enviar o banco de dado com pedido
setTimeout(() =>{
    clientLogado();
}, 3500);

let cliente = []
function clientLogado(){
    let user = document.querySelectorAll(".entryarea span");
    for (var i = 0; i < user.length; i++) {
        var produtos = user[i];
        var usuario = produtos.innerHTML //pega o testo
        //let passo1 =  papel.split(" ")//remove os espço
       // var passo2 = passo1.splice(0,1)// selciona o primeiro nome
        cliente.push(usuario);
       // entrar.textContent = usuario

       console.log(usuario)
    }
}

//---------------------------------------------------------



//document.getElementById("teste").innerText = pedido.toString();
///------dados do pedido--------//
/*
const auth=getAuth();
const dbf=getFirestore();

  // buscando cliente do cadastro e logado
const loggedInUserId = localStorage.getItem("loggedInUserId");
if(loggedInUserId){
    const docRef = doc(dbf, "users", loggedInUserId);
    getDoc(docRef)
    .then((docSnap)=> {   
    const userData=docSnap.data();
    let clientes = 

        userData.nome + ", " +
        userData.rua + ", " +
        userData.telefone;
    
        //salvando no local estorage
        localStorage.setItem("cliente", JSON.stringify(clientes));
       // console.log(clientes)
    }) 
}

//recuperando do local stroage
var base = JSON.parse(localStorage.getItem("cliente"));
*/
//const cliente = base;
//console.log(cliente);


// -------DATA------------
const date = new Date();
const formatter = Intl.DateTimeFormat("pt-BR",{
    dateStyle: "short",
});
 const  data = formatter.format(date);
//-------- fim da data


//pedido que vai para o firebase--- 
//document.getElementById("dinheiro").addEventListener("click", function(e){
function enviarPedido(){
    //e.preventDefault();
    set(ref(db, "users/" + cliente),
    
    {
        cliente: cliente,
        data: data,
        pedido: pedido,
        pagamento: payment,
        total: document.getElementsByClassName("total-price")[0].innerText,
 
    });


    alert("Pedido feito com sucesso");
}
//})






//-----///////////////////////

//desoga da conta
/*const logoutButton=document.getElementById("sair");
logoutButton.addEventListener("click", ()=>{
    console.log("funcionando");
    localStorage.removeItem("cliente");
    signOut(auth)
    .then(()=>{
       // window.location.href="index.html";
       alert("teste")
    })
    .catch((error)=>{
        console.error("error signIng out:", error);
    })
    
})*/


/*let passo = document.getElementById("marca");

passo.addEventListener("click", () =>{
 alert("dsshdhjhjhsjshdjhssah")
})*/