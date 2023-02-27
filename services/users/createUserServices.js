import { response , request } from "express";
import Usuario from '../../models/Usuario.js';
import generarId from '../../helpers/generarId.js'

//TODO: generar el jwt

const registerUserService = async(req = request,res=response) => {

    let user = new Usuario({
        rutContacto    : body.rutContacto,
        dvContacto   : body.dvContacto,
        nombres : body.nombres,
        apellidos : body.apellidos,
        funcion : body.funcion,
        email : body.email,
        password : body.password,
        imagen : body.imagen,
        token : body.token,
        confirmado : body.confirmado
    });
    try{        
        await user.save();

        return {
            statusCode:200,
            ok:true,
            nombres:user.nombres,
            apellidos:user.apellidos,
            email:user.email,
            password:user.password,
            token:user.token,
            confirmado:user.confirmado,
        }

    }catch(err){
        return{
            statusCode:400,
            ok:false,
            msg:'Por favor hable con el administrador'
        }
    }

}

export default registerUserService;