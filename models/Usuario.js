import mongoose from "mongoose";
import bcrypt from "bcrypt";

const usuarioSchema = mongoose.Schema({
    rutContacto: {
        type: Number,
        required:true,
    },
    dvContacto: {
        type: Number,
        required:true,
    },
    nombres: {
        type: String,
        trim: true,
        required:true,
    },
    apellidos: {
        type: String,
        trim: true,
        required:true,
    },
    funcion: {
        type: String,
        trim: true,
        required:true,
    },
    email: {
        type: String,
        trim: true,
        required:true,
    },
    password: {
        type: String,
        trim: true,
        required:true,
    },
    imagen: {
        type: String,
        trim: true,
    },
    token: {
        type: String,
    },
    confirmado: {
        type: Boolean,
        default: false,
    },

},{
    timestamps: true
});

//TODO: pre

//TODO: Methods
const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;