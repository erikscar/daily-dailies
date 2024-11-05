import { MongoClient } from "mongodb";

const mongoUrl = "mongodb://127.0.0.1:27017";
const dbName = "dailyDailies";

let client;

function connection() {
  try {
    client = new MongoClient(mongoUrl);
    const db = client.db(dbName);

    return db;
  } catch (error) {
    console.log(`Error Connecting to MongoDB : ${error}`);
  }
}

export { connection };
