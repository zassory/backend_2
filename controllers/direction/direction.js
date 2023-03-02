import {response,request} from "express";

import createDirectionServices from "../../services/direction/createDirectionService.js";
import { listDirectionsServices } from "../../services/direction/listDirectionsServices.js";


const createDirectionController = async(req = request , res = response) => {
  
    const { 
        statusCode , 
        ok , 
        nombre , 
        nombreDirector } = await createDirectionServices(req.body);

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

const listDirecionsController = async(req = request , res = response) => {    
    const {
        statusCode , 
        ok , 
        directions
    } = await listDirectionsServices(req.body);

    if(statusCode === 400){
        const error = new Error("Accion no Válida, hable con el administrador");
        return res.status(400).json({msg: error.message});
    }

    console.log({
        statusCode : 200,
        ok , 
        directions
    })

    res.status(200).json({        
        directions
    });
}

export {
    createDirectionController,
    listDirecionsController
}
