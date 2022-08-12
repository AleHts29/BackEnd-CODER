// import {bgBlue, red, bold, parse, format} from "./devDependencias.ts"

// console.log(parse("20-01-2019", "dd-MM-yyyy"));
// console.log(bgBlue(red(bold("Hello world!"))));

import { Application } from "./devDependencias.ts";
import {router} from "./routes/index.ts"

const app = new Application();

// como inicializo rutas
app.use(router.routes())



app.use((ctx)=>{
    ctx.response.body = "Hello Deno!!"
})

app.listen({port:8080})

console.log("Server run on port 8080");
