const express = require("express");

const app = express();
const arr = require('./arr')

// Le informo a mi app que va a reciboir archivos en formato JSON
app.use(express.json());

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



// POST --> Envio datos para que el server los almacene
// Envio informacion mediante POST usando Thunder Client o postMan
app.post('/', (req, res) =>{
    console.log(req.body)

    const obj = {
        name: req.body.name,
        price: req.body.price,
        id: arr.length + 1
    };
    arr.push(obj);

    res.send('Se agrego un nuevo producto de forma exitosa!..')
})


// PUT --> Actualiza determinados datos del lado del server
app.put('/:id', (req, res) => {

    // me muestra lo que viene de la url --> en este ejemplo el id
    console.log(req.params);

    // me muestra los datos enviados por put, que son los que quiero asignar en el id que envio por la url
    console.log(req.body);

    // desestructuracion --> ID que viene de la URL
    let {id} = req.params;

    // desestructuracion --> Datos que vienen de Thunder Client o postMan (metodo PUT)
    let {name, price} = req.body;

    const newArr = arr.filter((a) => {
        return a.id == parseInt(id);
    })

    for (const key in newArr) {
        newArr[key].name = name;
        newArr[key].price = price;
    }
        
    res.send(`El id:${id} se actualizo correctamente`);

})


// DELETE
app.delete('/:id', (req, res) => {
    let {id} = req.params;

    // Falta logica

    res.send(`El id:${id} se elimono correctamente`)
})


app.listen(3002, () => {
    console.log('server run on port 3002');
})