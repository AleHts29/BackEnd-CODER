const express = require('express')

const app = express();
// process.env.PORT ---> es el port asignado por el servidor en la nube
const port = process.env.PORT || 3003;

// Ruta
app.get('/', (req, res) => {
    // res.send('Hola Mundo!!');

    // enviar una obj
    // res.send({message:'Hola Mundo!!'})

    // enviar un json
    res.json({message:'Hola Mundo!!'})
})

app.get('/api', (req, res) => {
    res.send('Hola desde Api..')
})

app.get('/html', (req, res) => {
    res.send(`<h1 style="color:green"> HOLA con HTML </h1>`)
    
})




app.listen(port, () =>{
    console.log('Server run on port ' + port)
});
