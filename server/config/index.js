const { MongoClient } = require("mongodb");
const data = require("../data");

const uri =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0";

const client = new MongoClient(uri);
let db = null;

async function mongoConnect() {
  try {
    db = client.db("uni-eco");
    let flag = false;
    const collections = await db.listCollections().toArray();
    collections.forEach((el) => {
      if (el.name == "users") {
        flag = true;
      }
    });
    if (!flag) {
      db.createCollection("users");
      db.collection("users").bulkWrite(data);
    }
    return db;
  } catch (error) {
    console.log(error);
  }
}

function getDb() {
  return db;
}

module.exports = { mongoConnect, getDb };
