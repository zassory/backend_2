import mongoose from "mongoose";

const direccionSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    nombreDirector: {
        type: String,
        required: true,
    }    
}, {
    timestamps: true
});

//TODO: pre

//TODO: Methods
const Direccion = mongoose.model("Direccion",direccionSchema);
export default Direccion;