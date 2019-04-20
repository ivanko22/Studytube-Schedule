const express = require("express");

var app = express();
app.use(express.static(__dirname + '/public'));

app.get("/", function(request, response){
    response.render("studytube.ejs");
});

var port = process.env.PORT || 8080;
app.listen(port, () =>{
    console.log("Listening on port " + port);
});