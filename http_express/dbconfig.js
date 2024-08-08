const mysql = require('mysql');
const connect = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "sugunait",
    database:"node_db"
});
connect.connect(function(err) {
    if (err) throw err
    console.log("MySql DB Connected");    
});
module.exports = connect;