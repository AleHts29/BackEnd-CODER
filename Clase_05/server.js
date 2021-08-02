const http = require('http');

http.createServer((req, res) =>{
    res.end('Hello World...')

    const {url, method, headers} = req;
    let fecha = new Date();
    let hoora = fecha.getHours();
    let mesg = '';
    if(hora >=  6 && hora <= 12 )
        mesg = 'buenos dias';
    else 
        mesg = 'No definido'


}).listen(3500, function() {
    console.log(this.address().port)
});