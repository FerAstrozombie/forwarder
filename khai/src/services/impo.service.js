const ImportManager = require("../models/index");

class ImportSevice {
    static async getImports(){
        return await ImportManager.getAll();
    }

    static async saveImport(body){
        return await ImportManager.save(body)
    }

    static async getImportById(id){
        return await ImportManager.getById(id)
    }
}

module.exports = ImportSevice; 