import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {getDatabase, ref, push, get, child} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";


//dados do cliente
import {getAuth} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
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




var pedido = document.getElementById("pedidoLista");


let dadosData= []
let  dadosNome = []
let dadosPedido = []
let  dadosTotal = []
let  dadosPagamento = []






     const dbRef = ref(getDatabase());
     get(child(dbRef, "users")).then((snapshot) => {
       if (snapshot.exists()) {

       // console.log(snapshot.val().cliente)

        snapshot.forEach((childSnapshot) => {
            let childData = childSnapshot.val();
            console.log(childData)

             //dados = childData.cliente +  dados;
             dadosData = childData.data;
             dadosNome = childData.cliente;
            dadosPedido = childData.pedido;
            dadosTotal = childData.total;
            dadosPagamento = childData.pagamento;
           //dadosCliente = childData.cliente;

             // console.log(dadosCliente)

            /* let itens = document.querySelectorAll("#pedido p.box");

            let pedido = [];*/

            // console.log(dadosPedido)
             //listar.innerHTML = dados;
            
             console.log(dadosPedido)

             const pedidoData = dadosData;
             const pedidoNome = dadosNome;
            const pedidoLista = dadosPedido;
            const pedidoTotal = dadosTotal;
            const pedidoPagamento = dadosPagamento;
            
           //const clienteLista = dadosCliente;
            //if (pedidoLista !== ""){
            const div = document.createElement("div");
            div.classList.add("dadosPedido");
            div.innerHTML =`

            <p id="data">${pedidoData}</p>
            </div>
            <div class="entryarea" >Cliente: <span class="client" id="name">${pedidoNome}</span></div>
            <div class="entryarea">Forma de Pagamento: <span class="client" id="phone"></span>${pedidoPagamento}</div>
             
            <div class="justify-center">
                <hr>
             </div>
            <div class="tabela">
            <h5 class="qtd">QTD</h5>
            <h5 class="pdt">PRODUTOS</h5>
           
            </div>
            
            <!--dados vindo do cart.js -->
            <div id="pedido">${pedidoLista}</div> 
            
            <div class="justify-center">
               <hr>
            </div>
    
            <p>TOTAL: 
                <!------pega valor no cart-->
                <a class="pedidoTotal">${pedidoTotal}</a>
            </p>  
            `
            pedido.appendChild(div);

           // }

           /* nome.innerHTML = dados.split(", ", 1)
            var ender = dados.split(", ")
            rua.innerHTML = ender.slice(1,3); //slice corta palavra da frente o 1 selecioana o indice o 2 para nele
            var fone = dados.split(", ")
            telefone.innerHTML = fone.slice(3);*/

          

            //pedido.innerHTML = dadosPedido
/*
            const pedidoLista = dadosPedido;
            if (pedidoLista !== ""){
            const div = document.createElement("div");
            div.innerHTML =
            `<div class="entryarea" >Nome: <span class="client" id="name">${nome}</span></div>
            <div class="entryarea">Endereço: <span class="client" id="rua">${rua}</span></div>
            <div class="entryarea">Telefone: <span class="client" id="phone">${telefone}</span></div>`;
            lista.appendChild(div);
        }*/
        })

         /*console.log(snapshot.val());
       } else {
         console.log("No data available");*/
       }
     }).catch((error) => {
       console.error(error);
     });

     let passo = document.getElementById("#marca");

     passo.addEventListener("click", () =>{
      alert("dsshdhjhjhsjshdjhssah")
     })