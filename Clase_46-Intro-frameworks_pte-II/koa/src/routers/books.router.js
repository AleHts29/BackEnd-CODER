import Router from "koa-router";

const router = new Router({
  prefix: "/books",
});

const books = [
  {
    id: 1,
    name: "nombre 1",
    description: "descripcion 1",
  },
  {
    id: 2,
    name: "nombre 2",
    description: "descripcion 2",
  },
];

router.get("/", (ctx) => {
  ctx.body = {
    status: "success",
    data: books,
  };
});

router.get("/:id", (ctx) => {
  const { id } = ctx.params;
  const book = books.filter((book) => {
    if (book.id.toString() === id.toString()) return book;
  });
  if (book.length > 0) {
    ctx.body = {
      status: "success",
      data: book[0],
    };
  } else {
    ctx.body = {
      status: "error",
      data: null,
    };
  }
});

// POST
router.post("/", (ctx) => {
  //   const { id, name, description } = ctx.request.body;
  // console.log(id, name, description);
  const { body } = ctx.request;
  books.push(body);
  ctx.body = {
    status: "success",
    data: books,
  };
});

export default router;
