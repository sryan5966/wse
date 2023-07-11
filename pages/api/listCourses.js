
export default function listAllCoursesQuery(req, res) {


   
  
  
  
  
  
     
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
    "SELECT * FROM courses",
    function(err, results, fields) {
   
      res.status(200).json(results);
  
   
  
      
     
     
    }
  );
  
  
  
  
  
  
  
      
      
  }
      