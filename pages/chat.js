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

 
  async function handleSubmit(event){
  
   
    event.preventDefault();
 
 
 const data = {

  username: event.target.username.value,
  comment: event.target.comment.value,
 
}
 
    
     const JSONdata = JSON.stringify(data)

     alert(JSONdata);
 
     const endpoint = '/api/saveChat'

     
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


  return (
    
    
    <NextUIProvider theme={theme}>

<Image
      width={520}
      height={580}  
      src="https://www.krispykreme.ie/media/wysiwyg/Vegan_2022/Vegan-Homepage-Driver-22.png"
      alt="Default Image"
      objectFit="contain"
    />

<Card css={{ h: "$58", w: "$100", $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <textarea label="Chat Log" placeholder=""/>
          
      
          <Spacer y={1.6}/>


      
          <form onSubmit={handleSubmit}>
           <Spacer y={2} />
<Input labelPlaceholder="" initialValue="" id="username" />

<Spacer y={2} />
<Input labelPlaceholder="" initialValue="" id="comment" />
<Spacer y={2} />



<Spacer y={2} />
<Button type="submit" color="secondary" auto>
Send
</Button>

</form>








        </Card.Body>
      </Card>



 
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



  