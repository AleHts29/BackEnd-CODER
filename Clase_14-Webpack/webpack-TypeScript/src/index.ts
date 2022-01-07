const express = require("express");

const app = express();
const port = 8092;

app.get('/',(req:any, res:any)=>{
  res.send({message:"Server Ok!"})
})

app.listen(port, () => {
  console.log("🚀 server run on port " + port);
});
