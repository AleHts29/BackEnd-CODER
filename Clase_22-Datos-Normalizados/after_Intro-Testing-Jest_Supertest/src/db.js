import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("Conectado a la base de datos!");
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});

export default mongoose.connection;
