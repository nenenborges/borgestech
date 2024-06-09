import express from "express";
import cors from "cors";



import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({accessToken:"TEST-3212641412207539-060606-7cdd9e1aa6602db6c5536087d189cbcb-1810191826"});

const app = express();								
const port = 8080;


app.use(cors());
app.use(express.json());

app.get("/",  (req, res) => {
	res.send("eu sou um server)");
});
/*
app.get("/success", (req, res) => {
	res.send("pagamento feito")
	console.log("pagamento feito")
});*/


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
		//notification_url: "http://127.0.0.1:5500/index.html/webhook"
		
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

//-----RECEBENDO PAGO DO MERCADO PAGO--------//

app.post("/webhook", async function(req, res){
	const payment = req.query
	//console.log("resultado",{payment});
/*
	const paymentId = req.query.id;
	
	try{
		const response = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
			method: "GET",
			headers: {
				"Authorization": `Bearer ${"TEST-3212641412207539-060606-7cdd9e1aa6602db6c5536087d189cbcb-1810191826"}`
			}
		});

		if(response.ok){
			const data = await response.json();
			//console.log(data);
			console.log(data);
			
		}
		res.sendStatus(200);
	}catch (error) {
		console.error("Erro;", error);
		res.sendStatus(500);
	}*/
})
/*
app.post("/post-payment",(req, res) => {
	data = req.body
	alert(data)
})

fetch("https://api.mercadopago.com/v1/payments?accessToken:TEST-3212641412207539-060606-7cdd9e1aa6602db6c5536087d189cbcb-1810191826", {
			method: "GET",
			headers: {
				"X-meli-session-id": data.deviceId
			}
			})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data.status);
				if( data.status == "approved"){
					//res.sendFile("")
					console.log("aprovou");
				}
			});*/

			

//---------FIM DO RECEBENDO MERCADO PAGO--------//
/*
  app.listen(port, ()=> {
	console.log(`Este servidor esta na porta  ${port}` );
	
  });

 */
