var express = require('express');
var app = express();

app.get('/test', function(req,res){
	
	//res.send('Hello ');
	res.json({status:'success',message:[{name:'jeyaraj',age:22,company:'zozz'},{name:'Shiva',age:24,company:'google'}]});
})

app.listen(3030, function(){

	console.log("port 3030");
})
