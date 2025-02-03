const express = require('express');
const ImportController = require("../../controllers/importacionMaritima");
const router = express.Router();


router.get('/importacion', ImportController.getImport);

router.get('/importacion/:id', ImportController.getById)

router.post('/importacion/saveimport', ImportController.saveImport)

router.delete('/importacion/deleteimport/:id', ImportController.deleteById)

router.patch('/importacion/updateimport/:id', ImportController.updateImport)

module.exports = router