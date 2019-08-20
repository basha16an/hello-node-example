var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("Hello Milind and team! I am nodeJS app running on node server!");
}
var www = http.createServer(handleRequest);
www.listen(8080);
