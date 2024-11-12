const mongoose = require("mongoose");
const option = require("./options");

const connectMongoDB = ()=>{
    mongoose.connect(option.mongo.url)
    .then(connection =>{
        console.log("Db connect successuly");
    })
    .catch()
};

module.exports = connectMongoDB;