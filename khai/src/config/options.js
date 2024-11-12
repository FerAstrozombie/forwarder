const dotenv = require("dotenv");

dotenv.config({ path: "./config.env"});

const options = {
    mongo:{
        url: process.env.DB_CONNECTION
    }
}

module.exports = options;