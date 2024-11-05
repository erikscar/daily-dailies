import express from "express";
import { connection } from "../config/db";

const app = express();
const db = connection;

app.get("/", (req, res) => {
  res.json();
});
