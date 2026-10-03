const { Client } = require("pg");

const dotenv = require("dotenv");
dotenv.config();

const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})

client.connect()
    .then(() => {
        console.log("Connected to database");
    })
    .catch(() => {
        console.log("cannot connect to database");
    })

client.query("select * from admin_register", (err, res) => {
    if (!err) {
        console.log(res.rows);
    }
    else {
        console.log(err.message);
    }
   

    client.query("select * from user_login", (err, res) => {
        if (!err) {
            console.log(res.rows);
        }
        else {
            console.log(err.message);
        }
        client.end();
    });
});
module.exports = { client }