import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCaPv_OzBN9vI20I0ynTaIZRsViD9fa3WE",
    authDomain: "borgestechlogin.firebaseapp.com",
    projectId: "borgestechlogin",
    storageBucket: "borgestechlogin.appspot.com",
    messagingSenderId: "769990569355",
    appId: "1:769990569355:web:48e3efddc44248fa30538e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const container = document.getElementById('container-produtos');

async function carregarProdutos() {
    try {
        const querySnapshot = await getDocs(collection(db, "produtos"));
        container.innerHTML = '';

        querySnapshot.forEach((doc) => {
            const produto = doc.data();
            
            // Trata imagem vazia ou inválida
            const imagemUrl = produto.imagem || '/imagens/padrao-produto.jpg';
            
            // Texto alt otimizado para SEO
            const altTexto = `${produto.nome} - Suprimento/peça para impressora Epson - Atendemos Água Branca e São Pedro do Piauí`;
            
            // Escapa apostrófos para não quebrar o onclick
            const nomeSeguro = produto.nome.replace(/'/g, "\\'");
            
            // --- CORREÇÃO AQUI: Formata o preço com milhar e centavos usando o padrão nativo BR ---
            // Transforma 2299.00 em "2.299,00"
            const precoFormatado = new Intl.NumberFormat('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).format(produto.preco);

            // Dividimos a string do preço pela vírgula para isolar os centavos
            const partes = precoFormatado.split(',');
            const reais = partes[0];
            const centavos = partes[1] || '00';

            // Montamos o card com o <span> nos centavos para conversar com o seu CSS
            const card = `
                <div class="product-card">
                    <img 
                        src="${imagemUrl}" 
                        alt="${altTexto}"
                        loading="lazy"
                        onerror="this.src='/imagens/padrao-produto.jpg'; this.alt='Imagem indisponível'"
                        width="260"
                        height="260"
                    >
                    <h3>${produto.nome}</h3>
                    
                    <p>R$ ${reais}<span>,${centavos}</span></p>
                    
                    <button onclick="addToCart('${nomeSeguro}', ${produto.preco})">Adicionar ao Carrinho</button>
                </div>
            `;

            // Adiciona o card gerado na tela
            container.innerHTML += card;
        });
    } catch (erro) {
        console.error("Erro ao buscar produtos: ", erro);
        container.innerHTML = `<p style="text-align:center; color:#666;">Não foi possível carregar os produtos no momento.</p>`;
    }
}

carregarProdutos();
