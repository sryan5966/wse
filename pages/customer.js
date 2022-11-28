


import { withIronSessionApiRoute } from "iron-session/next";

import { Link } from "@nextui-org/react";

import { Input } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";

export default function Customer() {




 // Handle the submit for the form
  async function handleSubmit(event) {

       alert("The form was submitted");
       event.preventDefault();
    

       // grab the variables from the form.
       const baconQty = document.querySelector('#baconQty').value
      

        // Get data from the form.
        const data = {
          baconQty: baconQty,
      
        }
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
    
        // API endpoint where we send form data.
        const endpoint = '/api/cart'


    
        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: 'POST',
          // Tell the server we're sending JSON.
          headers: {
            'Content-Type': 'application/json',
          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        }

        
    
        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)
    
        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        
        alert(`server result: ${result}`)


    
  }
  
  
  
  return (
   <>
   
   Customer page<p></p>
   <form onSubmit={handleSubmit}>
   
      Bacon Qty: <Input id="baconQty"></Input>

     <Button type="submit">Place order</Button>


   </form>
   
   
<p></p>
   <Link href="/checkout">
     <Button type="submit">Checkout</Button>

   </Link>
   </>
  );
}


