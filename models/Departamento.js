import mongoose, { mongo } from "mongoose";

const departamentoSchema = mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: true
    },
    nombreJefatura: {
        type: String,
        trim: true,
        required: true
    },
    direccion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Direccion"
    }
}, {
    timestamps: true,
}
);

const Departamento = mongoose.model("Departamento",departamentoSchema);
export default Departamento;