/*import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import {getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";


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

const auth=getAuth();
const db=getFirestore();



onAuthStateChanged(auth, (user) => {
    const loggedInUserId = localStorage.getItem("loggedInUserId");
    if(loggedInUserId){
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
        .then((docSnap)=> {
            if (docSnap.exists()){
                const userData=docSnap.data();
				/*
                document.getElementById("name").innerText=userData.nome;
                document.getElementById("rua").innerText=userData.rua;
                document.getElementById("phone").innerText=userData.telefone;
                document.getElementById("email-conta").innerText=userData.email;
				*//*

				const nomes = {
					nome: userData.nome,
					rua: userData.rua,
					telefone: userData.telefone
				}

				
				

				
				//document.getElementById("teste").innerText = nomes.nome;


				
              
            }
            else{
                console.log("nao existe essse dados com documentos")
            }
        })
    }
})

const logoutButton=document.getElementById("sair");
logoutButton.addEventListener("click", ()=>{
    localStorage.removeItem("loggedInUserId");
    signOut(auth)
    .then(()=>{
        window.location.href="index.html";
    })
    .catch((error)=>{
        console.error("error signIng out:", error);
    })
    
})*/
//items = JSON.parse(localStorage.getItem("cartItems"));

//document.getElementById("teste").innerText = items;


/*const pedido = {
	nome: document.getElementById("name").value,
	rua:document.getElementById("rua").value,
	telefone:document.getElementById("phone").value,
};*/

/*var BoxContent = 
    `
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity">       
    </div>
    <i class='bx bxs-trash-alt cart-remove'></i>`;
  
 /*
saveProItems();

  function saveProItems(){
    var prodContent = document.getElementsByClassName("cart-content")[0];
    var prodBoxes = prodContent.getElementsByClassName("cart-box");
    var produtoItems = [];
   

    for(var i = 0; i < prodBoxes.length; i++){
        prodBox = prodBoxes[i];
        var titleElement = prodBox.getElementsByClassName("cart-product-title")[0];
        var priceElement =produto.getElementsByClassName("cart-price")[0];
        var  quantityElement = prodBox.getElementsByClassName("cart-quantity")[0];
    
        var item = {
            title: titleElement.innerText,
            price: priceElement.innerText,
            quantity: quantityElement.value,
        };
        produtoItems.push(item);
        
    }
    localStorage.setItem("produtoItems", JSON.stringify(produtoItems));

}

base = JSON.parse(localStorage.getItem("produtoItems"));

*/


var produto = document.getElementById("#produto");
var produto = document.getElementById("#teste");
const btn = document.querySelector("#get");

btn.addEventListener("click", function(event){
    event.preventDefault();

   produto = tab;
   
    console.log("ver", tab);

});

//document.getElementById("teste").innerText = teste



/*const lista = document.querySelector("#pedido");

listar();
function listar(){
    base.forEach((item) =>{

        linha = document.createElement("p");
        linha.innerHTML = item.quantity +" - "+ item.title;
        lista.appendChild(linha); 
    });
}







/*const payBtn = document.querySelector(".btn-buy");


payBtn.addEventListener("click", () =>{
    fetch("/checkout", {
        method: "post",
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify({
            items: JSON.parse(localStorage.getItem("cartItems")),
        }),
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .then((url) => {
        location.href = url;
    })
    .catch((err) => console.log(err));

});
//server do strip

/*
const app = express();
app.use(cors());

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
	res.sendFile("index.html", { root: "public" });
});

//Sucess
app.get("/success", (req, res) => {
	res.sendFile("sucess.html", { root: "public" });
});
//Cancel
app.get("/cancel", (req, res) => {
	res.sendFile("cancel.html", { root: "public" });
});


let preferenceway = new Preference(mercadopago);
let DOMAIN = "http://localhost:3000";

http://localhost:3000/create_reference
app.post("/checkout", async (req, res) => {
	const lineItems = req.body.items.map((item) => {
		const unitAmount = parseInt(item.price.replace(/[^0-9. -]+/g,"R$", "" * 100));
		console.log("item-price:", item-price);
		console.log("unitAmount:", unitAmount);
		return{
			price_data:{
				currrency: "BRL",
				product_data:{
					name: item.title,
					//images:[item.productImg]
				},
				unit_amount: unitAmount,
			},
			quantity:item.quantity,
		}
	});
	console.log("lineItems:", lineItems);

	// Create Checkout
	const session = await preferenceway.checkout.sessions.create({
		payment_methodo_types: ["card"],
		mode:"payment",
		sucess_url: `${DOMAIN}/sucsess`,
		cancel_url: `${DOMAIN}/cencel`,
		line_items: lineItems,

		// asking adress in stripe checkout page
		billing_address_colletion: "required",
	});
	req.json(session.url);
	});


app.listen(3000, () => {
	console.log(app);
});*/



//buton mercado pago
/*const createCheckoutButton = (payBtn) =>{
    const bricksBuilder = mercadopago.bricks();

    const renderComponent = async () => {
        if(window.checkoutButton) window.checkoutButton.unmount();
        
        await bricksBuilder.create("wallet", "wallet_container", {
            initialization: {
                payBtn: payBtn,
            },
        });
    };

renderComponent();
}; */
