const http = require('http');

//create server method which take callback function with two parameters
const server = http.createServer((req,res) => {
if(req.url === '/'){
  res.end('Welcome to our home page');
}
if(req.url === '/about'){
  res.end('Here is our short history');
}
res.end(`
  <h1>Ooops!!!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href = "/">back home </a>
  `)
})

//set the port that server listen
server.listen(5000)