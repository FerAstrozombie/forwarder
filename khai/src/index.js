const express = require("express");
const connectMongoDB = require("./config/dbOptions");
const cors = require('cors');

const config = require("./config/options")
const khaiRouters = require("./routes/index")

const app = express();

app.use(cors(
    config.application.cors.server
));

app.use(express.json());

connectMongoDB();

const PORT = process.env.PORT || 8080;

app.use("/", khaiRouters)

app.listen(PORT, () =>{
    console.log(`Server listening on port: http://localhost:${PORT}`);
})