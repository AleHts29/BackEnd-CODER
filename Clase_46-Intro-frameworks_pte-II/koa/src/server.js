import koa from "koa";
import dotenv from "dotenv";

import koaBody from "koa-body";
import BooksRouter from "./routers/books.router.js";

dotenv.config();

const app = new koa();

app.use(koaBody());

// app.use(async (ctx) => {
//   ctx.body = "Hello Koa";
// });

// Es liviano porque voy instalando cosas a medida que las necesito.

app.use(BooksRouter.routes());

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server run on PORT: ${PORT}`);
});
server.on("error", (err) => {
  console.log(err);
});
