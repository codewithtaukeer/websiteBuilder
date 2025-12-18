import "dotenv/config";
import pkg from "pg";
const { Client } = pkg;

const client = new Client({ connectionString: process.env.DATABASE_URL });
client
  .connect()
  .then(() => console.log("Connected!"))
  .catch(console.error);
