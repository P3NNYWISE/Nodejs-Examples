var http = require('http');
var server = http.createServer();
function control(request, response) {
	if (request.url ==='/'){

    
    response.writeHead(200, {'content-type': 'text/html'});
	response.write('Hola, <strong>Mundo</strong>');
	response.end();
    }else if (request.url === '/goodbye'){
        if(request.method == 'GET'){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write('Goodbye, <strong>Mundo</strong>');
            response.end();

        }
        else if (request.method === 'POST'){
            
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end('Posting Goodbye, <strong>Mundo</strong>');
        }
    }



}
server.on('request', control);
server.listen(8080);
console.log('Server running at http://127.0.0.1:8080/');


