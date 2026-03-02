const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    // Ativa a animação do ícone hambúrguer
    hamburger.classList.toggle("active");
    // Abre/Fecha o menu
    navLinks.classList.toggle("active");
});

// Fecha o menu ao clicar em um link (melhor experiência no mobile)
document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}));