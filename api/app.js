import express from "express";
import { connection } from "./config/db.js";
const routes = require("./routes/route.js");
const app = express();

connection();

app.use("/", routes);

app.listen(3000, () => {
  console.log("Server is Running...");
});
