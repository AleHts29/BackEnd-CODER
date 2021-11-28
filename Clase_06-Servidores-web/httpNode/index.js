const http = require("http");
const moment = require("moment");

// Peticiones a mi server
let server = http.createServer((req, res) => {
    
    // Fechas con moment
    let hour = moment().format('HH:mm');
    let start = moment().format('HH');


    if(req.url === '/'){
        res.end('Ruta principal')
    }

    if(req.url === '/api'){
        res.end('Hola desde otra ruta')
    }

    
    if(req.url === '/fyh'){  
        if(start >= 06 && start <= 12 ){
            return res.end('Buenos dias!!\nHora: ' + hour)
        }
        if(start >= 13 && start <= 19 ){
            return res.end('Buenas Tardes!!\nHora:'+hour)
        }
        if((start >= 20 && start <= 23 )|| (start >= 00 && start <= 05 )){
            return res.end('Buenas Noches\nHora:'+hour)
        }
    }

    if(req.url === '/home'){
        res.end(JSON.stringify({message:'Hola desde el Home'}))
    }

}); 

// Confi puerto del server
server.listen(3002, () =>{
    console.log('Server run on port 3002')
})