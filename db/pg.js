const { Client } = require("pg");

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "@bhavesh2006",
    database: "admin_register",
});

client.connect()
    .then(() => {
        console.log("Connected to database");
    })
    .catch(() => {
        console.log("cannot connect to database");
    })

module.exports ={client}