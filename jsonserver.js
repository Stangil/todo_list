var http = require('http');
var fs = require('fs');


/*sending Json
*/


var server = http.createServer(function(req, res){//create server   //res is a writable stream
  console.log('request was made: ' + req.url);//show request
  res.writeHead(200, {'Content-Type': 'application/json'});//response
  var myObj = {
    name: 'Stan',
    age: '30(i wish)',
    job: 'Superhero'
  };
  res.end(JSON.stringify(myObj));
});


server.listen(3000, '127.0.0.1');
console.log('Now listening...');
