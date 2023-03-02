import Direccion from "../../models/Direction.js";
import mongoose from "mongoose";

const listDirectionsServices = async(body) => {

    try{

        let directions = await Direccion.find();        
        
        return {
            statusCode : 200,
            ok : true,
            directions
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
