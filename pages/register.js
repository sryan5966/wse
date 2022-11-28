
import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import { useTheme } from '@nextui-org/react';
import {useRouter} from 'next/router'
import * as React from 'react';
import {Grid } from "@nextui-org/react";
// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import { Table } from "@nextui-org/react";

import { Input } from "@nextui-org/react";

import { Navbar, Button, Link, Radio } from "@nextui-org/react";



export default function Home({data}) {
  const router = useRouter()


  // Handle the submit for the form
  async function handleSubmit(event) {

       alert("The form was submitted");
       event.preventDefault();
    

       // grab the variables from the form.
       const name = document.querySelector('#username').value

       console.log("username is " + name);

       const pass = document.querySelector('#password').value

       console.log("password is " + pass);

       const telephone = document.querySelector('#telephone').value

       console.log("password is " + pass);

       const address = document.querySelector('#address').value


        // Get data from the form.
        const data = {
          username: event.target.username.value,
          password: event.target.password.value,
          telephone: event.target.telephone.value,
          address: event.target.address.value,
        }
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
    
        // API endpoint where we send form data.
        const endpoint = '/api/register'


    
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

        // redirect based on the result
      if(result.includes("ok")){
 
        router.push("/customer");
      }
    
  }
  
  
  return (
    <>
    
  
      <NextUIProvider>
  
      <div>
      <Text
        css={{
          color: '$blue800',
          fontSize: '$sm',
          padding: '$2 $4'
        }}
      >
        Using tokens
      </Text>
      <p
        style={{
          color: theme.colors.primary.value,
          fontSize: theme.fontSizes.sm.value,
          padding: `${theme.space[2].value} ${theme.space[4].value}`
        }}
      >
        Using color theme value
      </p>
    </div>
   
      <Spacer y={0.5} />
      <Input placeholder="Read only" initialValue="readOnly" />





      <Container gap={0}>
      <Row gap={1}>
        <Col>
          <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                1 of 2
              </Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                2 of 2
              </Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Spacer y={1} />
      <Row gap={1}>
        <Col>
          <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                1 of 3
              </Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
              <form onSubmit={handleSubmit}>
                  <Input type="text" id="fs" placeholder="Read only" initialValue="" />
                  <Button type="submit" color="secondary" auto>Submit </Button>
                  </form>
              </Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                3 of 3
              </Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>


    </NextUIProvider>
      
    </>
    
    
  )
}


