const express = require("express");
const connectMongoDB = require("./config/dbOptions")


const khaiRouters = require("./routes/index")

const app = express();

app.use(express.json());

connectMongoDB();

const PORT = process.env.PORT || 8080;

app.use("/", khaiRouters)

app.listen(PORT, () =>{
    console.log(`Server listening on port: http://localhost:${PORT}`);
})