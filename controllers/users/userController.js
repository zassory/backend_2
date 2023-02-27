import {response} from "express";

import registerUserService from '../../services/users/createUserServices.js';

const createUserController = async( req, res = response ) => {
    
    //const { email } = await registerUserService(req.body);
    const { email } = req.body;
    console.log(email);

    // if( statusCode ===  400){
    //     return res.status(400).json({
    //         ok,
    //         msg
    //     })
    // }
    // res.json({
    //     // ok,
    //     // nombre,
    //     email
    // });
}

export {
    createUserController    
}
