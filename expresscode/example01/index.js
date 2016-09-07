var express = require('express')
var app = express()

app.get('/', function(request , response ){
    response.send('Hello World')

})

app.get('/yo', function(request, response) {
    response.send('yo!!')
})

app.get('/:username' , function(request,response){
    var username = request.params.username;
    response.send(username);
    console.log(username);
})
var server = app.listen(3000, function(){
    console.log("running at localhost:"+ server.address().port)
}

);

