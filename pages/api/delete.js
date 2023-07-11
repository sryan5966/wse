
import bcrypt from 'bcrypt'
export default function handler(req, res) {

  

              const cid = req.body.cid;
             console.log(cid)

      // get the client
      const mysql = require('mysql2');
  
      // create the connection to database
      const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'example',
        port: 2222,
        database: 'wse'
      });



   

       

      connection.query("DELETE FROM wse.courses WHERE id='"+cid+"'",

    
      function(err, results, fields) {
     
        console.log(results); // results contains rows returned by server
  
        
       
      }
    );

 


    
  

   
      
  }
      