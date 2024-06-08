let menuIcon = document.querySelector(".menu-icon");
let navbar = document.querySelector("#menuItens");
let closenavbar = document.querySelector(".menu-close");



//Open Cart
menuIcon.onclick = () => {
    navbar.classList.add("active");
};

//Close Cart
closenavbar.onclick = () => {
    navbar.classList.remove("active");
};


//-------MENU QUANDO CLICADO FECHAR O MENU----
let  inicio = document.querySelector("#aInicio");
let produtos = document.querySelector("#aProdutos");
let contato = document.querySelector("#acontato");
let quemSomos = document.querySelector("#quemSomos");


//Close Cart inicio
inicio.onclick = () => {
    navbar.classList.remove("active");
};

//Close Cart
produtos.onclick = () => {
    navbar.classList.remove("active");
};

//Close Cart
contato.onclick = () => {
    navbar.classList.remove("active");
};

//Close Cart
quemSomos.onclick = () => {
    navbar.classList.remove("active");
};