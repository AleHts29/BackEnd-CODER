const http = require("http");
const moment = require("moment");

let server = http.createServer((req, res) => {
    console.log(req.url)

    let start = moment().format('HH:mm');

    console.log(start)

    if(req.url === '/'){
        res.end(''+start)
    }

    if(req.url === '/api'){
        res.end('Hola desde otra ruta')
    }

    if(req.url === '/home'){
        res.end(JSON.stringify({message:'Hola desde el Home'}))
    }

});

server.listen(3002, () =>{
    console.log('Server run on port 3002')
})