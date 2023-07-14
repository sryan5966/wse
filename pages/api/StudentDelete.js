
import bcrypt from 'bcrypt'
export default function handler(req, res) {

  

  const cid = req.body.cid;
  const sid = req.body.sid;
  const grade = req.body.grade;
             console.log("test"+sid)
             console.log(cid)

             var telephone = req.body.tel;
             console.log("tel"+telephone)
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



   /*
      connection.query("DELETE FROM wse.grades WHERE id='"+sid+"'",
      

    
      function(err, results, fields) {
     
        console.log(results); // results contains rows returned by server
  
        
       
      }
    );
       */

      connection.query("DELETE FROM wse.students WHERE telephone='"+telephone+"'",
      

    
      function(err, results, fields) {
     
        console.log(results); // results contains rows returned by server
  
        
       
      }
    );

  

    connection.query("DELETE FROM wse.grades WHERE sid='na'",
      

    
    function(err, results, fields) {
   
      console.log(results); // results contains rows returned by server
  
      
     
    }
  );

 


    
  

   
      
  }
      