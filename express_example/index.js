var mysql = require('mysql');
const express = require('express');
const app = express();

var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "sugunait",
    database:"node_db"
  });

  con.connect(function(err) {
    if (err) throw err
    
  });

app.get("/customer.html",function(req,res){
    res.sendFile( __dirname + "/" + "customer.html" );  
    
});  

/**
 * Create a new customer
 */  

app.post("/create",urlencodedParser,function(req,res){
    var name = req.body.name;
    var address = req.body.address;
    console.log(`Name ${name} - Address ${address}`);
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var values = [  
          [name,address]
          ];  
        var sql = "INSERT INTO customers (name, address) VALUES ?";
        con.query(sql,[values], function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
          
          res.send("1 Record Inserted");
        });
      });
});

app.get("/read",function(req,res){

  con.query("SELECT * FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        console.log(fields);
        
        res.end(JSON.stringify(result));  
      });

  // con.connect(function(err) {
  //   if (err) throw err;
  //   con.query("SELECT * FROM customers", function (err, result, fields) {
  //     if (err) throw err;
  //     console.log(result);
  //     console.log(fields);
      
  //     res.end(JSON.stringify(result));  
  //   });
  // });
  
});

app.get("/update",function(req,res){
  var address = "Tenkasi";
  var qry =`UPDATE customers SET address="${address}" WHERE name = "Susan"`;
con.connect(function (err) {
   if (err) throw err;
   console.log("Connected!");
   con.query(qry, function(err) {
      if (err) throw err;
      console.log("Records updated successfully");
      res.send("Record is updated");
   });
});
});



const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server Running PORT on ${PORT}`);
});