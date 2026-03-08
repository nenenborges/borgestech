let cart = [];
const sidebar = document.getElementById('cart-sidebar');
const overlay = document.getElementById('cart-overlay');

function toggleCart() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Lógica de Adicionar
document.querySelectorAll('.product-card button').forEach((btn, index) => {
    btn.onclick = () => {
        const card = btn.parentElement;
        const name = card.querySelector('h3').innerText;
        const priceText = card.querySelector('p').innerText;
        const price = parseFloat(priceText.replace('R$ ', '').replace('.', '').replace(',', '.'));
        
        addToCart(name, price);
    };
});




function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
}

function changeQuantity(name, delta) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.name !== name);
        }
    }
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    
    cartItemsElement.innerHTML = '';
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        count += item.quantity;

        cartItemsElement.innerHTML += `
            <div class="cart-item">
        <div class="item-info">
            <h4>${item.name}</h4>
        </div>
        
        <div class="item-price">
            <p>R$ ${item.price.toFixed(2)}</p>
        </div>

        <div class="quantity-selector">
            <button class="qty-btn" onclick="changeQuantity('${item.name}', -1)">−</button>
            <span class="qty-number">${String(item.quantity).padStart(2, '0')}</span>
            <button class="qty-btn" onclick="changeQuantity('${item.name}', 1)">+</button>
        </div>
    </div>
        `;
    });

    cartCount.innerText = count;
    cartTotal.innerText = `R$ ${total.toFixed(2)}`;
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
    document.getElementById('cart-overlay').classList.toggle('active');
}

/*---whats app produtos*/

function checkoutWhatsApp() {
    // Verifica se o carrinho está vazio antes de tentar enviar
    if (cart.length === 0) {
        alert("Seu carrinho está vazio! Adicione produtos antes de finalizar.");
        return;
    }

    const numeroTelefone = "5586995681475"; // Número da Borges Tech
    let mensagem = "Novo Pedido - Borges Tech\n";
    mensagem += "----------------------------------\n\n";
    
    let totalGeral = 0;

    // Percorre o array 'cart' (que contém {name, price, quantity})
    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        totalGeral += subtotal;
        
        // Formata cada linha: [Qtd] Nome do Produto - Valor
        mensagem += `${item.quantity} - ${item.name}  R$ ${subtotal.toFixed(2).replace('.', ',')}\n `;
       // mensagem += `Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}\n\n `;
    });

    mensagem += "----------------------------------\n";
    mensagem += `*TOTAL = R$ ${totalGeral.toFixed(2).replace('.', ',')}*\n\n `;
    mensagem += "Gostaria de prosseguir com o pagamento e entrega.";

    // Codifica a mensagem para o formato de URL do WhatsApp
    const mensagemFormatada = encodeURIComponent(mensagem);
    const url = `https://wa.me/${numeroTelefone}?text=${mensagemFormatada}`;

    // Abre o WhatsApp em uma nova aba
    window.open(url, '_blank');

}
