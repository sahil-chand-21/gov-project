const { Client } = require("pg");
const path = require("node:path");
const dotenv = require("dotenv");

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    ssl: {
    rejectUnauthorized: false,
},
})

client.connect()
    .then(() => {
        console.log("Connected to database");
    })
    .catch((error) => {
    console.error("cannot connect to database:", error.message);
    console.error("error code:", error.code);
    })

client.query("select * from public.admins", (err, res) => {
    if (!err) {
        console.log(res.rows);
    }
    else {
        console.log(err.message);
    }
   

    client.query("select * from public.admins", (err, res) => {
        if (!err) {
            console.log(res.rows);
        }
        else {
            console.log(err.message);
        }
        client.end();
    });
});

module.exports = client;