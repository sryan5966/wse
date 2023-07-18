
export default function handler(req, res) {

    console.log("login api page called...");
   
  
  
    // Get just the username and password and put them into variables.
    const username = req.body.username;
    const pass = req.body.password;

    if(username.includes(';') || pass.includes(';')){
      res.status(200).json("SLQ is not permitted")
      return false;

    }

  
    
    if(username ==  '' || pass ==  ''){
      res.status(200).json("Inputs must not be empty")
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
  
  
    // simple query
  connection.query(
    "SELECT * FROM adminlogin WHERE username = '"+username+"' LIMIT 1;",
    function(err, results, fields) {
   
     
  
      
      // sending back the result.
      if(results.length == 1){
  
        res.status(200).json("Login Successful")
    
  
      } else {
       
        res.status(200).json("The username or password is incorrect");
  
      }
     
    }
  );
  
  
  
  
  
  
  
      
      
  }
      