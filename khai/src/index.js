const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env"});

const khaiRouters = require("./routes/api/importacionMaritima")

const app = express();

app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION)
    .then(connection =>{
        console.log("Db connect successuly");
    })
    .catch()

const PORT = process.env.PORT || 8080;

app.use("/", khaiRouters)

app.listen(PORT, () =>{
    console.log(`Server listening on port: http://localhost:${PORT}`);
})