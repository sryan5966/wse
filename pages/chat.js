import { Grid, Card, Text } from "@nextui-org/react";
import Link from 'next/link'
import { Table } from '@nextui-org/react';
import { createTheme } from "@nextui-org/react"
import { NextUIProvider } from '@nextui-org/react';
import { Button } from "@nextui-org/react";


export default function ListAllCourses({data, courseid}) {

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



<Card css={{ w: '100%', h: "$24", $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
        
          </Text>
        </Card.Body>
      </Card>
  

 

      <Card css={{ w: '100%', h: "$500", $$cardColor: '$colors$primary' }}>
        <Card.Body>
 
    <Table

aria-label="Example table with static content"
css={{
  height: "auto",
  minWidth: "100%",

}}>

<Table.Header>
  <Table.Column>ID</Table.Column>
  <Table.Column>Title</Table.Column>
  <Table.Column>Description </Table.Column>
  <Table.Column>NFQ </Table.Column>
  <Table.Column>Year </Table.Column>
  <Table.Column>Option to view</Table.Column>
  <Table.Column>Option to Delete</Table.Column>
</Table.Header>
<Table.Body >
  <Table.Row key="1">
    <Table.Cell></Table.Cell>
    <Table.Cell></Table.Cell>
    <Table.Cell></Table.Cell>
    <Table.Cell></Table.Cell>
    <Table.Cell></Table.Cell>
    <Table.Cell></Table.Cell>
    <Table.Cell></Table.Cell>

  </Table.Row>


  {

    data &&
    data.map((item, i) => (
      // print out the table from the JSON we got
      // from the API

      <Table.Row key="1">

        <Table.Cell>{item.id} </Table.Cell>
        <Table.Cell>{item.title} </Table.Cell>
        <Table.Cell>{item.description} </Table.Cell>
        <Table.Cell>{item.nfq} </Table.Cell>
        <Table.Cell>{item.courseyear} </Table.Cell>
        
        <Table.Cell><Link href={"/viewAll?id=" +item.id}>View</Link></Table.Cell>
        <Table.Cell> <Button type="button" onClick={(Delete) => DeleteData(item.id)}  size="xs">Delete</Button></Table.Cell>
      </Table.Row>






    ))
  }

</Table.Body>
</Table>
   
</Card.Body>
      </Card>
      
    </NextUIProvider>

  )
}


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



  async function DeleteData(id) {

    alert("The course was removed");
  // Get data from the form.
  const data = {
    cid: id,


  }

  // Send the data to the server in JSON format.
  const JSONdata = JSON.stringify(data)

  // API endpoint where we send form data.
  const endpoint = '/api/delete'



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

   // alert('Saved!');
  }
