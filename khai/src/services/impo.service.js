const ImportManager = require("../models/index");

const ImportManagerReal = ImportManager.ImportManager

class ImportSevice {
    static async getImports(){
        return await ImportManagerReal.getAll();
    }

    static async saveImport(body){
        return await ImportManagerReal.save(body)
    }

    static async getImportById(id){
        return await ImportManagerReal.getById(id)
    }
    static async deleteImportById(id){
        return await ImportManagerReal.deleteById(id)
    }
    static async updateImport(id, body){
        return await ImportManagerReal.updateById(body, id)
    }
}

module.exports = ImportSevice; 