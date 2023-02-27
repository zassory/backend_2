import {response} from "express";

import registerUserService from '../../services/users/createUserServices.js';

const createUserController = async( req, res = response ) => {
    
    const { statusCode , ok , nombres , apellidos , email , password , token , confirmado } = await registerUserService(req.body);
    
    console.log(statusCode , ok , nombres , apellidos , email , password , token , confirmado);

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
