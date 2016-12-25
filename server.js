var express = require('express');
var app = express();

app.get('/', function(req,res){
	
	res.send('Hello API');
})

app.listen(3030, function(){

	console.log("port 3030");
})
