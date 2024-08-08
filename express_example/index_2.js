const express = require('express');
const app = express();

var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

app.get('/index.html', function (req, res) {  
    res.sendFile( __dirname + "/" + "index.html" );  
 })  

app.get("/",function(req,res){
    res.write("Reading Home Page");
    res.end("Ending");
});

app.get("/home",function(req,res){
    var name = req.param("name");
    var names = {"name":name};
    res.json(names);
    //res.send("My name is "+name);
});

app.get('/process_get', function (req, res) {  
    response = {  
           first_name:req.query.first_name,  
           last_name:req.query.last_name  
       };  
       console.log(response);  
       res.end(JSON.stringify(response));  
    })  

app.post('/process_post',urlencodedParser,function(req,res){
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);  
       res.end(JSON.stringify(response));  
});    

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server Running PORT on ${PORT}`);
});