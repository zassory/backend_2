import Direccion from "../../models/Direction.js";
import mongoose from "mongoose";

const listDirectionsServices = async(body) => {

    try{

        const { nombre , nombreDirector } = await Direccion.find();
        
        return {
            statusCode : 200,
            ok : true,
            nombre,
            nombreDirector
        }

    }catch(error){
        return {
            statusCode: 400,
            ok: false,
            msg: error
        }
    }
    
}

export {
    listDirectionsServices
}
