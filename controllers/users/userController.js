import {response} from "express";

import { registerUserService } from '../../services/users/createUserServices.js';
import { userExistsServices } from "../../services/users/userExistsServices.js";

const createUserController = async( req, res = response ) => {
    
    const { statusCode , ok , nombres , apellidos , email , password , token , confirmado } = await registerUserService(req.body);

    const { existeUsuario } = await userExistsServices(req.body);

    if( statusCode ===  400){
        return res.status(400).json({
            ok,
            msg
        })
    }
    res.json({
        statusCode,
        ok,
        nombres,
        email,
        password,
        token,
        confirmado,
    });
}

export {
    createUserController    
}
