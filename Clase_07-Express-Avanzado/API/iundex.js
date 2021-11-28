const express = require('express');


const app = express();


app.get('/', (req, res) => {
    res.sendStatus(200).send('Hola, soy una respuesta del back')
})


app.get('/api', (req, res) => {
    res.send('Hola, sdesde /api')
})


app.listen(3002, () => {
    console.log('Server run on port 3002')
})