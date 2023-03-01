import {response,request} from "express";

import { createDirectionServices } from "../../services/direction/createDirectionService.js";


const createDirectionController = async(req = request , res = response) => {
  
    const { 
        statusCode , 
        ok , 
        nombre , 
        nombreDirector } = createDirectionServices(req.body);

    if(statusCode === 400){
        return res.status(400).json({
            ok,
            msg
        });
    }

    res.json({
        statusCode,
        ok,
        nombre,
        nombreDirector
    });
}

export {
    createDirectionController
}
