var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200);
res.end(Helllo! Welcome To your own Test Http Server');
});
server.listen(1012);
