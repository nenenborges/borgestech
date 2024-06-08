//Cart Open Close
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");


//Open Cart
cartIcon.onclick = () => {
    cart.classList.add("active");
    
  
};

//Close Cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};
//----------------------------

//açao para fechar o carrinho e abrir o pedido



//cart trabalhando
if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
}



//Marking function---------fazendo a funçao
function ready(){
    // remove Item from card-------remove item do carrinho
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }

    // Quantity Changes--------
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

        //Add to Cart
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
    loadCartItems();
}

// Remove Cart Itens
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();   
    updateCartIcon();
    saveCartItems(); 
     
}

//Quantity Changes
function quantityChanged(event) {
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0) {
       input.value = 1;
    }
    updatetotal();
    updateCartIcon();
    saveCartItems();                   /* =====================*/
}

//Add Cart Funcition
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText; 
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title,price,productImg);
    updatetotal();
    updateCartIcon();
    saveCartItems();
}

function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");

   /* for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert("Você ja adicionou este item ao carrinho");
            return;
        }
    }*/

    var cartBoxContent = 
    `<img src="${productImg}" alt="" class="cart-img"/>
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity">       
    </div>
    <i class='bx bxs-trash-alt cart-remove'></i>`;

    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox
        .getElementsByClassName("cart-remove")[0]
        .addEventListener("click", removeCartItem);
    cartShopBox
        .getElementsByClassName("cart-quantity")[0]
        .addEventListener("change", quantityChanged);
    
    updateCartIcon();
    saveCartItems();
}



// Update Total       atualizar total
function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("R$", "")).toFixed(2);
        var quantity = quantityElement.value;
        total += price * quantity;  

    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-price")[0].innerText = parseFloat(total).toFixed(2)
    
    localStorage.setItem("cartTotal", parseFloat(total));
    
 
   

    
}


//KEEP ITEM WHEN- salvar os itns do carrinho quando atualizar pagina 
function saveCartItems(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var cartItems = [];

    for(var i = 0; i < cartBoxes.length; i++){
        cartBox = cartBoxes[i];
        var titleElement = cartBox.getElementsByClassName("cart-product-title")[0];
        var priceElement =cart.getElementsByClassName("cart-price")[0];
        var  quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var productImg = cartBox.getElementsByClassName("cart-img")[0].src;

        var item = {
            title: titleElement.innerText,
            price: priceElement.innerText, 
            quantity: quantityElement.value,
            productImg: productImg,
        };
        cartItems.push(item);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    

   
}
// Load in cart - 

function loadCartItems() {
    var cartItems = localStorage.getItem("cartItems");
    if(cartItems) {
        cartItems = JSON.parse(cartItems);

        for(var i = 0; i < cartItems.length; i++){
            var item = cartItems[i];
            addProductToCart(item.title, item.price, item.productImg);

            var  cartBoxes = document.getElementsByClassName("cart-box");
            var cartBox = cartBoxes[cartBoxes.length - 1];
            var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
            quantityElement.value = item.quantity;
        }
    }
    var cartTotal = localStorage.getItem("cartTotal");
    if(cartTotal) {
        document.getElementsByClassName("total-price")[0].innerText = parseFloat(cartTotal).toFixed(2);
       
    }
}

//Quantity in car icon -- quantidade no icone do carrinho
function updateCartIcon(){
    var cartBoxes = document.getElementsByClassName("cart-box");
    quantity = 0;

    for(var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        quantity += parseInt(quantityElement.value);

    }
    var cartIcon = document.querySelector("#cart-icon");
    cartIcon.setAttribute("data-quantity", quantity);

}



//Clear cart depois do pagamento
function clearCart(){
    var cartContent = document.getElementsByClassName("cart-content"[0]);
    cartContent.innerHTML = "";
    updatetotal();
    localStorage.removeItem("cartItems");
}
//////#############################################################################


//--passa os dados do carinho para o pedido########################
/*
base = JSON.parse(localStorage.getItem("cartItems"));
priceTotal = localStorage.getItem("cartTotal");

const lista = document.querySelector("#pedido");
const pedidototal = document.querySelector("#pedidoTotal");
const totalPrice = document.getElementsByClassName("total-price")

const buyBtn = document.querySelector(".btn-buy")
buyBtn.addEventListener("click", () =>{
if(total == "0.00"){
    alert("seu carro esta vazio")
}
   
   
});*/


//
//listar();
//updatetotal();
//function listar(){
 /*   var linha = []
    base.forEach((item) =>{
        linha = document.createElement("p");
        linha.classList.add("box");
        linha.innerHTML = item.quantity +" - "+ item.title;
        lista.appendChild(linha);
    });*/
//}


/*
base = JSON.parse(localStorage.getItem("cartItems"));
const pedidototal = document.querySelector("#pedidoTotal");
priceTotal = localStorage.getItem("cartTotal");
const lista = document.querySelector("#pedido");

pedidototal.innerHTML = priceTotal


// /////////////////fim da lista///////////////////

for(var i = 0; i < base.length; i++){
    var iteen = base[i];
    //addProductTopro(item.title, item.price);
    console.log(iteen)
    linha = document.createElement("p");
    linha.classList.add("box");
    linha.innerHTML = iteen.quantity +" - "+ iteen.title;
    lista.appendChild(linha);
    console.log(iteen);
}*/

let final = document.querySelector(".btn-buy");
let load = document.querySelector("#checkout-voltar");

load.addEventListener("click",(loadPage));

final.addEventListener("click", () =>{
   loadPedidoItems();
})
//funçao atualiza a pagina
function loadPage(){
    window.location.reload();
  
}
var mas = ""
function loadPedidoItems() {
    var pedidoItems = localStorage.getItem("cartItems");
    var lista = document.querySelector("#pedido");
    //if(pedidoItems) {
        pedidoItems = JSON.parse(pedidoItems);

        for(var i = 0; i < pedidoItems.length; i++){
            var item = pedidoItems[i];

            linha = document.createElement("p");
            linha.classList.add("box");
            linha.innerHTML = item.quantity +" - "+ item.title;
            lista.appendChild(linha);
   
        }
    
    var pedidoTotal = localStorage.getItem("cartTotal");
    if(pedidoTotal) {
        document.querySelector("#pedidoTotal").innerHTML = parseFloat(pedidoTotal).toFixed(2);
        mas = pedidoTotal
    }
}
console.log(mas)