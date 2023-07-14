
export default function getENrolledSTudents(req, res) {


   console.log("get enrolled page ID for query" + req.query.id);


   let currentID = req.query.id;
   
  
   console.log(currentID);
  
  
  
     
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
  
  
  
    connection.query(
      "SELECT * from students, grades where enrolledin = '"+currentID+"';",
      function(err, results, fields) {
  
          console.log(results);
     
        res.status(200).json(results);
    
     
    
        
       
       
      }
    );
 


      
  }
      