
export default function SaveGrade(req, res) {


    const cid = req.body.cid;
    const sid = req.body.sid;
    const grade = req.body.grade;
    console.log(cid)
    console.log(sid)
    console.log(grade)
  
  
  
  
     
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
    connection.query("DELETE FROM wse.grades WHERE sid='"+sid+"'",
      

    
    function(err, results, fields) {
   
      console.log(results); // results contains rows returned by server

      
     
    }
  );

  */

  connection.query("DELETE FROM wse.grades WHERE sid='na'",
      

    
  function(err, results, fields) {
 
    console.log(results); // results contains rows returned by server

    
   
  }
);

  
  connection.query(
    "INSERT INTO wse.grades (sid,courseid,grade) VALUES ('"+sid+"','"+cid+"','"+grade+"');",
    function(err, results, fields) {
   
      res.status(200).json(results);
  
   
     
    }
  );

 

  
  
  
  
  
  
      
      
  }
      