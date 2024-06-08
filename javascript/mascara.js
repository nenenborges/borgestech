


var celular = document.getElementById("telefone");

celular.addEventListener("input", () => {
    var  limpaValor = celular.value.replace(/\D/g, "").substring(0,11);

    var numerosArray = limpaValor.split("");

    var numeroFormatado = "";

    celular.value = limpaValor;

    if(numerosArray.length > 0){
        numeroFormatado += `(${numerosArray.slice(0,2).join("")})`;
    }

    if(numerosArray.length > 2){
        numeroFormatado += ` ${numerosArray.slice(2,7).join("")}`;
    }

    if(numerosArray.length > 2){
        numeroFormatado += `-${numerosArray.slice(7,11).join("")}`;
    }

    celular.value = numeroFormatado;
});