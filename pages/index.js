


import {useRouter} from 'next/router'

import { NextUIProvider } from '@nextui-org/react';
import { Input } from "@nextui-org/react";
import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { createTheme } from "@nextui-org/react"
import React, {useState} from 'react';


export default function Home({data}) {

  
  const getInitialState = () => {
    const value = "";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  }


  ///////////////////////////// Login //////////////////////////////////

  async function handleSubmit(event){
  
    alert("The form was submitted");
    event.preventDefault();
 

    
    const name = document.querySelector('#username').value

    console.log("username is " + name);

    const pass = document.querySelector('#password').value

    console.log("password is " + pass);

    
     const data = {
       username: event.target.username.value,
       password: event.target.password.value,
     }
 
    
     const JSONdata = JSON.stringify(data)
 
     const endpoint = '/api/login'

     
     const options = {
      
       method: 'POST',
      
       headers: {
         'Content-Type': 'application/json',
       },
      
       body: JSONdata,
     }

     const response = await fetch(endpoint, options)
 
     const result = await response.json()
     
     alert(`server result: ${result}`)

     router.push("/listAllCourses");

  }

   ///////////////////////////// Login End //////////////////////////////////


  ///////////////////////////// Register //////////////////////////////////

  async function handleSubmitReg(event){
  
    alert("The Student was registered");
    event.preventDefault();
 
 
 const data = {

  firstName: event.target.firstName.value,
  lastName: event.target.lastName.value,
  email: event.target.email.value,
  address: event.target.address.value,
  telephone: event.target.telephone.value,
  enrollid: event.target.enrollid.value,
 
}
 
    
     const JSONdata = JSON.stringify(data)
 
     const endpoint = '/api/register'

     
     const options = {
      
       method: 'POST',
      
       headers: {
         'Content-Type': 'application/json',
       },
      
       body: JSONdata,
     }

     const response = await fetch(endpoint, options)
 
     const result = await response.json()
     
     alert(`server result: ${result}`)

     router.push("/listAllCourses");

     

  }

   ///////////////////////////// Register End //////////////////////////////////




   
  const router = useRouter()

  
  const MockItem = ({ text }) => {
    return (
      <Card css={{ h: "$24", $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };
  return (

    

    <NextUIProvider theme={theme}>
      
<Grid.Container gap={2} justify="center">
      <Grid xs={4}>
      
      </Grid>
      <Grid xs={4}>
        


      <Card css={{ h: "$58", w: "$100", $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
           Register a student to the system
           
           <ul>
            <li>Course ID 1 - Computing</li>
            <li> Course ID 2 - Science</li>
            <li>Course ID 3 - Marketing</li>
           </ul>

           <form onSubmit={handleSubmitReg}>
           <Spacer y={2} />
<Input labelPlaceholder="First Name*" initialValue="" id="firstName" />

<Spacer y={2} />
<Input labelPlaceholder="Last Name*" initialValue="" id="lastName" />
<Spacer y={2} />
<Input labelPlaceholder="Email*" initialValue="" id="email" />
<Spacer y={2} />
<Input labelPlaceholder="Address*" initialValue="" id="address" />
<Spacer y={2} />
<Input labelPlaceholder="Telephone*" initialValue="" id="telephone" />
<Spacer y={2} />
<Input labelPlaceholder="Course ID*" initialValue="" id="enrollid" />
<Spacer y={2} />


<Spacer y={2} />
<Button type="submit" color="secondary" auto>
Register
</Button>

</form>

      
          </Text>
        </Card.Body>
      </Card>


      </Grid>
      <Grid xs={4}>
        


      <Card css={{ h: "$58", w: "$100", $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
           Login to system
           <Spacer y={2} />

           <form onSubmit={handleSubmit}>
           <Input id="username" placeholder="username"/>
           <Spacer y={2} />
           <Input id="password" placeholder="Password"/>
           <Spacer y={2} />
           <Button type="submit" color="secondary" auto>
                      Login
                    </Button>


       
           </form>

        


        

          </Text>
        </Card.Body>
      </Card>


      </Grid>
      
    </Grid.Container>

    </NextUIProvider>
    
  )
}

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


