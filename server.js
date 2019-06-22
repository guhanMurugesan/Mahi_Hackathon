var http = require('http');

//create a server object:
http.createServer(function (request, response) {
  console.log("the client request from "+request.url);
  console.log(request.method);
  
  if(request.method == "POST" && request.url.indexOf("upload") !== -1)
  {
    upload(request,response);
  }
  if(request.method == "GET" && request.url.indexOf("view") !== -1)
  {
    view(request,response);
  }

}).listen(1000); //the server object listens on port 8080

function upload(request,response)
{
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.writeHead(200,{'Access-Control-Allow-Origin' : '*'});
    response.write('upload success');
    response.end();
}

function view(request,response)
{
    var index = request.url.indexOf('=');
    var len = request.url.length;
    var value = request.url.substring(index+1,len);
    console.log(value);

    response.writeHead(200, {'Content-Type': 'text/json'});
    response.writeHead(200,{'Access-Control-Allow-Origin' : '*'});
    
    response.write('{ name:"guhan",age:"25"}');
    response.end();
}