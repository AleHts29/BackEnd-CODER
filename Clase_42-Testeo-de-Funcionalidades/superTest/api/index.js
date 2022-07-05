const express = require("express");
const routerUsers = require("./src/routes/user");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 8080;

// shift +alt + x
/* -------------------------------------------------------------------------- */
/*                                 MIDDLEWARE                                 */
/* -------------------------------------------------------------------------- */
app.use(cors());
app.use(express.json());
app.use("/api", routerUsers);

app.listen(PORT, () => {
  console.log("Server run on Port " + PORT);
});
