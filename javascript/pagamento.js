//pagamento Open Close

let openPagamento = document.querySelector("#checkout-btn");
let Pagamento = document.querySelector(".container-pagamento");
let closePagamento = document.querySelector("#fechar-pagamento");

//usado para fechar o pedido quando abrir o pagamento
let Container = document.querySelector(".container-card");

//Open pagamento
openPagamento.onclick = () => {
    //if (logado != "Entrar"){
        Pagamento.classList.add("active");
        Container.classList.remove("active");// fecha o pedido
        
    
       
  
};

//fechar pagamento
closePagamento.onclick = () => {
    Pagamento.classList.remove("active");
    window.location.reload();
};

//logado = document.getElementById("nome");

//----------------------------


//Verificando se esta logado
/*if(localStorage.getItem("token") == null) {
    alert("Você ja tem conta? Acesse! ou cadastre-se");
    window.location.href = "index.html";
}

let userLogado = JSON.parse(localStorage.getItem("loggedInUserId"));

let logado = document.querySelector("#name");
logado.innerHTML = `Olá ${userLogado.nome}`;

function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "";
}*/