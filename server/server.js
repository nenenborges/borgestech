/*
import express from "express";
import cors from "cors";



import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({accessToken:"TEST-3212641412207539-060606-7cdd9e1aa6602db6c5536087d189cbcb-1810191826"});

const app = express();								
const port = 3000;


app.use(cors());
app.use(express.json());

app.get("/",  (req, res) => {
	res.send("eu sou um server)");
});



app.post("/create_preference", async (req, res) => {
	try{
	  const body = {
		items: [
		  {
		  title: req.body.title,
		  quantity: Number(req.body.quantity),
		  unit_price: Number(req.body.price),
		  currency_id:"BRL",
		  },
		],
		back_urls:{
		  success:"https://borgestech.com.br/sucess.html",
		  failure:"https://borgestech.com.br/cancel.html",
		  pending:""

		},
		
		auto_return:"approved",
		
	  }
	  const preference = new Preference(client);
	  const result = await preference.create({ body });
	  res.json({
	  id: result.id,
 	 });
  
	} catch (error) {
	  console.log(error);
	  res.status(500).json({
		error: "Errou ao criar a preferencia :("
		});
	}
});

  app.listen(port, ()=> {
	//console.log(`Este servidor esta na porta  ${port}` );
	
  });
 */
//---------teste mercado pago -----------===


import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({accessToken:"TEST-3212641412207539-060606-7cdd9e1aa6602db6c5536087d189cbcb-1810191826"});

//document.getElementById("checkout-btn").addEventListener("click", async () => {
const preference = await new Preference(client)
.create({
  body: {
    items: [
      {
	id: "01",
        title: 'produto',
        quantity: 1,
        unit_price: 25
      }
    ],
  }
});
redirect(preference.sandbox_init_point);


//});













//createCheckoutButton(preference.id); 

//----------------buton-----------------///
/*
const createCheckoutButton = (preferenceId) => {
  const bricksBuilder = mp.bricks();

  const renderComponent = async () => {
      if(window.checkoutButton) window.checkoutButton.unmount();
      
      await bricksBuilder.create("wallet", "wallet_container", {
          initialization: {
              preferenceId: preferenceId,
          },
      });
  };

  renderComponent();
};

*/

 //-----------------------///
