import { MongoClient } from "mongodb";

const mongoUrl = "mongodb://127.0.0.1:27017";
const client = new MongoClient();

client.connect(mongoUrl);
