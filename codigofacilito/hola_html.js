var http = require ("http"),
	fs = require("fs");

// fs.readFileSync() version sincronica
fs.readFile("./index.html" , function(err,html){

http.createServer( function(req ,res){
	res.writeHead(200,{"Content-Type":"text/html"})
	res.write(JSON.stringify({nombre: "fabio", username:"fabior"}));
	res.end();

}).listen(3000);


});


