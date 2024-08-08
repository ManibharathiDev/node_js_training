const {Router} = require('express');
const contact = require('../controllers/contactcontroller');
const app = Router();
app.get('/contact',contact);
// app.get('/contact',function(req,res){
//     res.send("Contact Router");
// });
module.exports = app;