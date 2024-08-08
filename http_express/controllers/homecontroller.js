const connection = require('../dbconfig');
module.exports = (req,res)=>{
    //res.send("I am from Home Controller");

    connection.query("SELECT * FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        console.log(fields);
        
        res.end(JSON.stringify(result));  
      });
}