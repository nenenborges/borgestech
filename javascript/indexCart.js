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
        const card = btn.closest('.product-card'); // Mais seguro que parentElement
        const name = card.querySelector('h3').innerText.trim();
        const priceText = card.querySelector('p').innerText.trim();
        const price = parseFloat(priceText.replace('R$ ', '').replace('.', '').replace(',', '.'));
        
        if (!isNaN(price) && name) {
            addToCart(name, price);
        }
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

    // ✅ AQUI: Exibe mensagem quando o carrinho está vazio
    if (cart.length === 0) {
        cartItemsElement.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-cart"></i>
                <p>Seu carrinho está vazio</p>
                <span>Adicione produtos para solicitar orçamento</span>
            </div>
        `;
        cartCount.innerText = '0';
        cartTotal.innerText = 'R$ 0,00';
        return;
    }

    cart.forEach(item => {
        total += item.price * item.quantity;
        count += item.quantity;

        cartItemsElement.innerHTML += `
            <div class="cart-item">
                <div class="item-info">
                    <h4>${item.name}</h4>
                </div>
                <div class="item-price">
                    <p>R$ ${item.price.toFixed(2).replace('.', ',')}</p>
                </div>
                <div class="quantity-selector">
                    <button class="qty-btn" onclick="changeQuantity('${item.name.replace(/'/g, "\\'")}', -1)">−</button>
                    <span class="qty-number">${String(item.quantity).padStart(2, '0')}</span>
                    <button class="qty-btn" onclick="changeQuantity('${item.name.replace(/'/g, "\\'")}', 1)">+</button>
                </div>
            </div>
        `;
    });

    cartCount.innerText = count;
    cartTotal.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

/*--- WhatsApp Pedidos ---*/
function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert("Seu carrinho está vazio! Adicione produtos antes de finalizar.");
        return;
    }

    const numeroTelefone = "5586995681475";
    let mensagem = "📦 NOVO PEDIDO - BORGES TECH\n";
    mensagem += "----------------------------------\n\n";
    
    let totalGeral = 0;

    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        totalGeral += subtotal;
        mensagem += `• ${item.quantity}x ${item.name} → R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    });

    mensagem += "\n----------------------------------\n";
    mensagem += `✅ TOTAL = R$ ${totalGeral.toFixed(2).replace('.', ',')}\n\n`;
    mensagem += "Gostaria de confirmar o pedido. Aguardo retorno sobre entrega e forma de pagamento!";

    const mensagemFormatada = encodeURIComponent(mensagem);
    const url = `https://wa.me/${numeroTelefone}?text=${mensagemFormatada}`;
    window.open(url, '_blank');
}

// Inicializa o carrinho com a mensagem de vazio ao carregar a página
document.addEventListener('DOMContentLoaded', updateCart);
