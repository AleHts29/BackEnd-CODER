const express = require("express");

const app = express();
const arr = require("./arr");

app.use(express.json())

//GET
// app.get("/", (req, res)=> {
//     res.send("Hola mundo")
// })

app.get("/users", (req, res) => {
  res.send({ data: arr });
});

app.get("/api", (req, res) => {
  console.log(req.query);
  let obj = {
    name: req.query.name,
    lastName: req.query.lastName,
    id: 5,
  };

  arr.push(obj);
  res.send("Usuario guardado correctamente!");
});

//PARAMETROS URL
app.get("/:id", (req, res) => {
 

  let { id } = req.params;

  let arrNew = arr.filter((x)=> {
    return x.id == id
  })

  console.log(arrNew)

  res.send({data:arrNew[0]});
});

app.post("/", (req, res)=> {
    console.log(req.body)

    let obj = {
        name: req.body.name,
        lastName: req.body.lastName,
        id: 5,
    };
    
      arr.push(obj);

    res.send("Esto es un POST!")
})

//DELETE

//PUT



app.listen(3002, () => {
  console.log("Server run pno port 3002");
});
