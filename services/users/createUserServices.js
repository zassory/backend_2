import { response , request } from "express";
import Usuario from '../../models/Usuario.js';
import generarId from '../../helpers/generarId.js'
//TODO: generar el jwt

const registerUserService = async(req = request,res=response) => {

    const { email } = req.body;
    console.log(email);
}

export default registerUserService;