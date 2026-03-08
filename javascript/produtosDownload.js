import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Suas configurações do Firebase
const firebaseConfig = {
     apiKey: "AIzaSyCaPv_OzBN9vI20I0ynTaIZRsViD9fa3WE",
    authDomain: "borgestechlogin.firebaseapp.com",
    projectId: "borgestechlogin",
    storageBucket: "borgestechlogin.appspot.com",
    messagingSenderId: "769990569355",
    appId: "1:769990569355:web:48e3efddc44248fa30538e"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const container = document.getElementById('container-produtos');

async function carregarProdutos() {
    try {
        // Busca a coleção "produtos" no Firestore
        const querySnapshot = await getDocs(collection(db, "produtos"));
        
        // Limpa o container antes de carregar (opcional)
        container.innerHTML = '';

        querySnapshot.forEach((doc) => {
            const produto = doc.data();
            
            // Cria a estrutura do card dinamicamente
            const card = `
                <div class="product-card" >
                    <img src="${produto.imagem}" alt="${produto.nome}">
                    <h3>${produto.nome}</h3>
                    <p>R$ ${produto.preco}</p>
                    <button onclick="addToCart('${produto.nome}', ${produto.preco})"> Adicionar ao Carrinho </button> 
               </div>
            `;
            
            container.innerHTML += card;
        });
    } catch (erro) {
        console.error("Erro ao buscar produtos: ", erro);
    }
}

// Executa a função ao carregar a página

carregarProdutos();
