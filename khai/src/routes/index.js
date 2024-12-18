const express = require("express");
const router = express.Router();

const importRouter = require("./api/importacionMaritima.js");
const exportRouter = require("./api/exportacionMaritima.js");

importRouter.get("/",(req, res)=>{
    res.send("bienvenido")
})

exportRouter.get("/",(req, res) =>{
    res.send("bienvenido")
})

router.use(importRouter)
router.use(exportRouter)

module.exports = {importRouter, exportRouter}

