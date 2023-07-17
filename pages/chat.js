import { Grid, Card, Text, Spacer } from "@nextui-org/react";
import Link from 'next/link'
import { Table } from '@nextui-org/react';
import { createTheme } from "@nextui-org/react"
import { NextUIProvider } from '@nextui-org/react';
import { Button } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { Input } from "@nextui-org/react";


export default function Chat({data}) {

  async function callChatPage(){


    const options = {
    
     method: 'POST',
    
     headers: {
       'Content-Type': 'application/json',
     },
    
     body: '',
   }
 
   const response = await fetch('http://localhost:3000/api/getChats', options)
 
   const result = await response.json()

  console.log("chat page result: " + result );

  
  document.getElementById('chatlog').textContent = result;
  
   }

  
  async function handleSubmit(event){
  
   
    event.preventDefault();
 
 
 const data = {

  username: event.target.username.value,
  comment: event.target.comment.value,
 
}
 
    
     const JSONdata = JSON.stringify(data)

     alert(JSONdata);
 
     const endpoint = 'http://localhost:3000/api/saveChat'

     
     const options = {
      
       method: 'POST',
      
       headers: {
         'Content-Type': 'application/json',
       },
      
       body: JSONdata,
     }

     const response = await fetch(endpoint, options)
 
     const result = await response.json()
     
     alert(`server result:` + result)

     

  }


  setInterval(() => {console.log("log");

  callChatPage();

//end
}, 1000);
  return (
    
    
    <NextUIProvider theme={theme}>



<Card css={{ h: "$58", w: "$100", $$cardColor: '$colors$primary' }}>
        <Card.Body>
        Chat Log
          <textarea label="Chat Log" id="chatlog"/>
          
      
          <Spacer y={1.6}/>


      
          <form onSubmit={handleSubmit}>
           <Spacer y={2} />
<Input label="username" initialValue="" id="username" />

<Spacer y={2} />
<Input label="comment" initialValue="" id="comment" />
<Spacer y={2} />



<Spacer y={2} />
<Button type="submit" color="secondary" auto>
Send
</Button>

</form>








        </Card.Body>
      </Card>



 

      
    </NextUIProvider>

  )
}

/*
export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/listCourses`)
    const data = await res.json()
 if(!data){
    return{
        notFound: true,
    }
 }
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }
  */

  const theme = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      colors: {
        // brand colors
        primaryLight: '$green200',
        primaryLightHover: '$green300',
        primaryLightActive: '$green400',
        primaryLightContrast: '$green600',
        primary: '#4ADE7B',
        primaryBorder: '$green500',
        primaryBorderHover: '$green600',
        primarySolidHover: '$green700',
        primarySolidContrast: '$white',
        primaryShadow: '$green500',
  
        gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
        link: '#5E1DAD',
  
        // you can also create your own color
        myColor: '#ff4ecd'
  
        // ...  more colors
      },
      space: {},
      fonts: {}
    }
  })



  