const express = require('express');
const ExportController = require("../../controllers/exportacioMaritima");
const router = express.Router();


router.get('/exportacion', ExportController.getExport);

router.get('/exportacion/:id', ExportController.getById);

router.post('/exportacion/saveexport', ExportController.saveExport);

router.delete('/exportacion/deleteexport/:id', ExportController.deleteById);

router.patch('/exportacion/updateexport/:id', ExportController.updateExport)

module.exports = router