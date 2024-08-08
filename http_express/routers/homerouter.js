const {Router} = require('express');
const home = require('../controllers/homecontroller')
const app = Router();
app.get('/',home);

// app.get('/',function(req,res){
//     res.send("Home Router");
// });
module.exports = app;