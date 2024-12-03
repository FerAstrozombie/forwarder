const mongoose = require("mongoose")

const impoColection = "impo";

const impoSchema = new mongoose.Schema(
    {
        bl:{
            type:String,
            required:true,
            unique : true
        },
        condition:{
            type: String,
            required: true
        },
        product:{
            type: String,
            required:true
        },
        shipper:{
            type: String,
            required: true,
        },
        consignee:{
            type: String,
            required:true
        },
        weigth:{
            type: String,
            required:true
        },
        rate:{
            type: String,
            required:true,
        },
        origen:{
            type: String,
            required:true,
        },
        buque:{
            type: String,
            required: true
        },
        arrival:{
            type: String,
            required: true
        }
    },
{
    timestamps: true
});

const ImportModel = mongoose.model(impoColection,impoSchema);

module.exports = ImportModel