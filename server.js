var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest (request, response) {

    response.end ("It Works!! Path Hit: " + request.url);

}

var server = http.createServer(handleRequest);

server.listen(PORT1 , function() {

    console.log("You Suck");
});



server.listen(PORT2 , function() {

    console.log("You are pretty good");
});

