const ImportSevice = require("../services/impo.services");

class ImportController{
    static async getImport (req, res){
        try {
            const response = await ImportSevice.getImports();
            /* res.status(200).json({"productos" : response}) */
            res.render("imports",{
                imports: response,
            })
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
            /* res.status(200).json({"productos" : response}) */    
            res.redirect("/imports");
        } catch (error) {
            res.status(400).json({
                status: "ERROR",
                message:`Hubo un error ${error}`
            })
        }
    };

    static async getById (req, res){
        try {
            const response = await ImportSevice.getById(req.params.id);
            /* res.status(200).json({"producto" : response}) */
            res.render("detalle", {
                producto: response
            })
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

    static async getLista (req, res){
        try {
            const response = await ImportSevice.getImport();
            res.render("listofimports",{
                productos: response
            })
        } catch (error) {
            res.status(400).json({
                status: "ERROR",
                message:`Hubo un error ${error}`
            })
        }
    };

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