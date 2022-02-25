const http = require('http')
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('here is our short history')
    }
    res.end(`
    <h1>OOPs</h1>
    <p>sorry</p>
    <a href="/">back home</a>
    `)
//console.log(req);
//res.write('Welcom to our home page')
//res.end()
})
server.listen(5001)