const express = require("express");

const app = express();
const arr = require('./arr')

console.log(arr)


// GET
app.get('/', (req, res) => {
    res.send('Hola Mundo!')
})


// Me muestra el array de productos
app.get('/products', (req, res) => {
    res.send({data:arr});
})


// Para envio de valores por query --> http://localhost:3002/api?name=Presonus-placa_Sonido?price=80
app.get('/api', (req, res) => {
    console.log(req.query);

    const obj = {
        name: req.query.name,
        price: req.query.price,
        id: arr.length + 1
    };
    arr.push(obj);
    res.send('Producto guardado de forma correcta!')
})


// Params por URL --> http://localhost:3002/3 envio un id por url y lo busco  dentro del array de objetos
app.get('/:id', (req, res) => {
    console.log(req.params);

    // desestructuracion
    let {id} = req.params;
    
    const newArr = arr.filter((a) => {
        return a.id == parseInt(id);
    })
    console.log(newArr);

    res.send({data:newArr})
})



// POST

app.listen(3002, () => {
    console.log('server run on port 3002');
})