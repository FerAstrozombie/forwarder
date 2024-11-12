const express = require("express");
const router = express.Router();

const productRouter = require("./api/importacionMaritima.js");

productRouter.get("/",(req, res)=>{
    res.send("bienvenido")
})

router.use(productRouter)

module.exports = productRouter;

