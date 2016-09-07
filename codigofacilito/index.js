var http = require ("http"),
	fs = require("fs");

// fs.readFileSync() version sincronica
fs.readFile("./index.html" , function(err,html){
    var html_string =  html.toString();

    var variables = html_string.match(
        /[^\{\}]+(?=\})/g
    );
    var nombre = "Codigo Facilito";
    http.createServer( function(req ,res){
	res.writeHead(200,{"Content-Type":"text/html"})
	res.write(html);
	res.end();

}).listen(3000);


});


