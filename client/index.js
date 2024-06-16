

//const client = new MercadoPagoConfig({accessToken:"TEST-3212641412207539-060606-7cdd9e1aa6602db6c5536087d189cbcb-1810191826"});


const mp = new MercadoPago("TEST-b2c96b64-a20b-4bdf-958a-a583fdbeb64b", {
  locale: 'pt-BR', // 'pt-BR'
});


document.getElementById("checkout-btn").addEventListener("click", async () => {
  try{
    
      const orderData = {
          title: "MATERIAL DE INFORMÁTICA",//document.querySelector(".name").innerTest,
          quantity: 1,
          price: document.getElementsByClassName("total-price")[0].innerText,
      };

      const response = await fetch("/create_preference", { 
          method: "POST",
          headers: {
              "Content-Type": "application/json",
             // "X-Idempotency-key": "123",//idempotencykey,
          },
          body: JSON.stringify(orderData),       
      });
         
      const preference = await response.json();
      createCheckoutButton(preference.id);
  }   catch(error) {
      alert("error:(");  

  
  } 
});


//buton mercado pago
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


