import app from "./app.js";

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server run on port ${PORT}`)
);
server.on("error", (err) => console.log(err));
