
export default function handler(req, res) {

    console.log("register api page called...");
   
    console.log("looking at the variables we got from the browser..");
    console.log(req.body);
  
    // Get just the username and password and put them into variables.
    const username = req.body.username;
    const pass = req.body.password;
    const address = req.body.address;
    const telephone = req.body.telephone;
    

    console.log("username is: "+ username);
    console.log("password  is: "+ pass);
    console.log("address  is: "+ address);
    console.log("telephone  is: "+ telephone);
  
  
    // db
    // get the client
    const mysql = require('mysql2');
  
    // create the connection to database
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      port: 3306,
      database: 'assignment1'
    });
  
  
    // simple query
  connection.query(
    "INSERT INTO `assignment1`.`users` (`username`, `pass`, `email`, `address`) VALUES ('"+username+"', 'z', 'z', 'z');",
    function(err, results, fields) {
   
      
  
        res.status(200).json("ok");
     
     
    }
  );
  
  
  
  
  
  
  
      
      
  }
      