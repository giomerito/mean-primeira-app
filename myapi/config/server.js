const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const queryParser = require('express-query-int');
const cors = require("./cors");
const port = process.env.PORT || 1586;
//const porta = 1586;

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
//server.use(cors);
//server.use(queryParser());

/*
server.use(function(req, res, next){
   res.send("MyApi"); 
});
*/
server.listen(port, function(){
   console.log("Servidor rodando na port %s", port); 
});

module.exports = server;