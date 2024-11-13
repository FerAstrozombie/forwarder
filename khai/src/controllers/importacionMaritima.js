const ImportSevice = require("../services/impo.service");

class ImportController{
    static async getImport (req, res){
        try {
            const response = await ImportSevice.getImports();
            res.status(200).json({"imports" : response})
            /* res.render("imports",{
                imports: response,
            }) */
        } catch (error) {
            res.status(400).json({
                status: "ERROR",
                message:`Hubo un error ${error}`
            })
        }
    };

    static async saveImport (req, res){
        try {
            const response = await ImportSevice.saveImport(req.body);
            res.status(200).json({"imports" : response})    
            /* res.redirect("/imports"); */
        } catch (error) {
            res.status(400).json({
                status: "ERROR",
                message:`Hubo un error ${error}`
            })
        }
    };

    static async getById (req, res){
        try {
            const response = await ImportSevice.getImportById(req.params.id);
            res.status(200).json({"import" : response})
            /* res.render("detalle", {
                producto: response
            }) */
        } catch (error) {
            res.status(400).json({
                status: "ERROR",
                message:`Hubo un error ${error}`
            })
        }
    };

    static async deleteById (req, res) {
        const response = await ImportSevice.deleteById(req.params.id)
        res.status(200).json({"message" : response})
    }

    static async updateImport (req, res){
        const id = req.params.id;
        const response = await ImportSevice.getById(id);
        const responseUpdate = await ImportSevice.updateImport(req.body, id);
    };

    static async deleteImport(req, res){
        const id = req.params.id;
        const response = await ImportSevice.deleteById(id);
        res.redirect("/imports")
    }
}

module.exports = ImportController;