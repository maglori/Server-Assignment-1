var http = require('http'),
    PORT1 = 7000,
    PORT2 = 7500;

function handleRequest(request,response) {
	response.end("It works! Path hit: " + request.url);
};

//complimentary server
var server1 = http.createServer(handleRequest);

server1.listen(PORT1, function(){
	console.log("you are cute!")
});

//insulting server
var server2 = http.createServer(handleRequest);

server2.listen(PORT2, function(){
	console.log("you stink!.")
});