const mongoose = require("mongoose")

const impoColection = "impo";

const impoSchema = new mongoose.Schema(
    {
        bl:{
            type:String,
            required:true,
            unique : true
        },
        producto:{
            type:String,
            required:true
        },
        peso:{
            type:Number,
            required:true
        },
        tarifa:{
            type: Number,
            required:true,
        },
        origen:{
            type: String,
            required:true,
        },
        consignatario:{
            type:String,
            required:true
        },
    },
{
    timestamps: true
});

const ImportModel = mongoose.model(impoColection,impoSchema);

module.exports = ImportModel