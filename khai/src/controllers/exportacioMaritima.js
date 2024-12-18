const ExportSevice = require("../services/expo.service");

class ExportController{
    static async getExport (req, res){
        try {
            const response = await ExportSevice.getExports();
            res.status(200).json({"exports" : response})
        } catch (error) {
            res.status(400).json({
                status: "ERROR",
                message:`Hubo un error ${error}`
            })
        }
    };

    static async saveExport (req, res){
        try {
            const response = await ExportSevice.saveExport(req.body);
            res.status(200).json({"export" : response})    
        } catch (error) {
            res.status(400).json({
                status: "ERROR",
                message:`Hubo un error ${error}`
            })
        }
    };

    static async getById (req, res){
        try {
            const response = await ExportSevice.getExportById(req.params.id);
            res.status(200).json({"export" : response})
        } catch (error) {
            res.status(400).json({
                status: "ERROR",
                message:`Hubo un error ${error}`
            })
        }
    };

    static async deleteById (req, res) {
        const response = await ExportSevice.deleteExportById(req.params.id)
        res.status(200).json({"message" : response})
    }

    static async updateExport (req, res){
        const id = req.params.id;
        const response = await ExportSevice.getById(id);
        const responseUpdate = await ExportController.updateExport(req.body, id);
        res.status(200).json({"message" : responseUpdate});
    };

    static async deleteExport(req, res){
        const id = req.params.id;
        const response = await ExportSevice.deleteById(id);
        res.status(200).json({"message" : response})
    }
}

module.exports = ExportController;