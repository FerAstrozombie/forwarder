const MongoCointainer = require("./managers/mongo.manager");
const ImportModel = require("./impoMaritimo");
const ExportModel = require("./expoMaritimo");

const ImportManager = new MongoCointainer(ImportModel);
const ExportManager = new MongoCointainer(ExportModel);

module.exports = {ImportManager, ExportManager}
