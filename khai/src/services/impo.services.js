const ImportManager = require("../models/managers/mongo.manager");

class ImportSevice{
    static async getImports(){
        const imports = await ImportManager.getImports();
        console.log(imports);
        return imports;
    }

    static async saveImport(body){
        return await ImportManager.save(body);
    }

    static async getById(id){
        const importById = await ImportManager.getById(id);
        return importById
    }

    static async deleteById(id){
        return await ImportManager.deleteById(id);
    }

    static async updateImport(body, id){
        return await ImportManager.updateById(body, id);
        
    }
}

module.exports = ImportSevice; 