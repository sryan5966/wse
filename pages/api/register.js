
import bcrypt from 'bcrypt'
export default function handler(req, res) {

  

    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var address = req.body.address;
    var email = req.body.email;
    var telephone = req.body.telephone;
    var enrollid = req.body.enrollid;

    if(firstName.includes(';') || lastName.includes(';') || address.includes(';') || telephone.includes(';') || enrollid.includes(';')){
      res.status(200).json("SLQ is not permitted")
      return false;

    }
   

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



   

       

      connection.query("INSERT INTO wse.students (`firstname`, `lastname`, `email`, `address`, `telephone`, `enrolledin`)  VALUES ('"+firstName+"', '"+lastName+"', '"+email+"', '"+address+"', '"+telephone+"', '"+enrollid+"')",

    
      function(err, results, fields) {
     
        console.log(results); // results contains rows returned by server
  
        
       
      }
    );

    connection.query("INSERT INTO wse.grades (`sid`, `courseid`, `grade`)  VALUES ('na', 'na', 'na')",

    
    function(err, results, fields) {
   
      console.log(results); // results contains rows returned by server

      
     
    }
  );





 

    

 


    
  

   
      
  }
      