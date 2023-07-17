import { MongoClient } from 'mongodb' 

export default function getChats(req, res) {

  
 

const uri = "mongodb://root:example@0.0.0.0:6667";

const client = new MongoClient(uri);



async function run() {
  try {
    const database = client.db("courses");

    const col = database.collection("chats");

    
    const query = {           };
    const options = {        };
    const cursor = col.find(query, options);

  
let buffer = '';
    cursor.forEach(element => {
 console.log(element);
 buffer = buffer + element;
 res.status(200).json(element);
    });

  


    await cursor.forEach(console.dir);

  }

  
  finally {
    await client.close();
  }
}


run().catch(console.dir);
   


}