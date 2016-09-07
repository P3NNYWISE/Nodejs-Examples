var express = require ("express");

var app= express();

app.set ("view engine" ,  "jade");


app.get("/",  function(req,res){
    res.render("index",{hola:"hola de nuevo codigo facilito",
chau:"chau codigo"});
}
);
app.listen(8080);