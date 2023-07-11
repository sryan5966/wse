
import bcrypt from 'bcrypt'
export default function handler(req, res) {

  

              const sid = req.body.sid;
             console.log(sid)

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



   

       

      connection.query("DELETE FROM wse.students WHERE id='"+sid+"'",
      

    
      function(err, results, fields) {
     
        console.log(results); // results contains rows returned by server
  
        
       
      }
    );

 


    
  

   
      
  }
      