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


const produtosDetails = document.querySelector(".pro-container");

let dadosMarca= []
let  dadosNome = []
let dadosValor = []
let  dadosLink = []

// traz dados do firesstore
const querySnapshot = await getDocs(collection(db, "products"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  const data = doc.data();

dadosMarca= data.marca
dadosNome = data.produto
dadosValor = data.valor
dadosLink =  data.image

//parseFloat(total).toFixed(2)
  
  const productMarca = dadosMarca
  const productNome = dadosNome
  const productValor = parseFloat(dadosValor).toFixed(2)
  const ImagemLink = dadosLink

  console.log(productValor);
 //imagens.src = data.image;


const div = document.createElement("div");
div.classList.add("product-box");
//div.innerHTML =

var productContent =
 ` 
     <img  src="${ImagemLink}" class="product-img">
     <div class="des">
         <span>${productMarca}</span>
         <h5 class="product-title" id="product-title">${productNome}</h5>
         <div class="star">
             <i >&#9733;&#9733;&#9733;&#9733;&#9734</i> <!---estrelas-->
         </div >
         <div class="price-box">
             <p>R$</p><h4 class="price" id="price">${productValor}</h4>
         </div>
     </div>
     <button class="add-cart" >ADICIONAR NO CARRINHO</button>
   
`
div.innerHTML = productContent
produtosDetails.appendChild(div);
div
    .getElementsByClassName("add-cart")[0]
    .addEventListener("click", addCartClicked);
div
    .getElementsByClassName("price")[0]
    //.addEventListener("change", quantityChanged);

})

