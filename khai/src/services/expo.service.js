const ExportManager = require("../models/index");

const ExportManagerReal = ExportManager.ExportManager

class ExportSevice {
    static async getExports(){
        return await ExportManagerReal.getAll();
    }

    static async saveExport(body){
        return await ExportManagerReal.save(body);
    }

    static async getExportById(id){
        return await ExportManagerReal.getById(id);
    }

    static async deleteExportById(id){
        return await ExportManagerReal.deleteById(id);
    }
    static async updateExport(id, body){
        return await ExportManagerReal.updateById(body, id)
    }
}

module.exports = ExportSevice; 