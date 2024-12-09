import { MongoClient } from "mongodb";

const dbUrl = "mongodb://localhost:27017";
const dbName = "dailyDailies";
const client = new MongoClient(dbUrl);

let db;

async function database() {

    if(!db) {
        await client.connect();
        db = client.db(dbName)
    }
    
    return db
}

export { database }