const MongoCointainer = require("./managers/mongo.manager");
const ImportModel = require("./impoMaritimo");

const ImportManager = new MongoCointainer(ImportModel);

module.exports = ImportManager;
