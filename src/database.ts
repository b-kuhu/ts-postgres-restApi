var pg = require('pg');
var connString = "postgres://postgres:Kuhub*28@localhost:5432/restapi";

var client = new pg.Client(connString);
client.connect((err:Error)=>{
   if(err){
    console.log('Connection error');
   }
   else{
    console.log('Database Connected');
   }
});


module.exports = client;