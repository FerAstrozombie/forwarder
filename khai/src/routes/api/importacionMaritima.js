const express = require('express');
const ImportController = require("../../controllers/importacionMaritima");
const router = express.Router();


router.get('/', ImportController.getImport);

router.post('/', ImportController.saveImport)

module.exports = router