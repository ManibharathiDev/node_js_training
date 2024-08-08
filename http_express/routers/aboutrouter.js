const {Router} = require('express');
const about = require('../controllers/aboutcontroller');
const app = Router();
app.get('/about',about);
// app.get('/about',function(req,res){
//     res.send("About Router");
// });
module.exports = app;