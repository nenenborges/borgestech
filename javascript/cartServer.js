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




/*


//import { getAuth, onAuthStateChanged } from "firebase/auth";
onAuthStateChanged(auth, (user) => {
  if (user) {

	
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;

	console.log(uid)
    // ...
  } else {
    // User is signed out
    // ...
  }
});
*/









/*const mp = new MercadoPago("TEST-d10771b1-b41c-47f6-9d21-4c362343b419", {
    locale: 'pt-BR',
  });*/

/*
const payBtn = document.getElementById("checkout-btn");


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

document.getElementById("produto").innerText = lineItems + "";



//http://localhost:3000/create_reference
//app.post("/checkout", async (req, res) => {
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
	






/*
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
