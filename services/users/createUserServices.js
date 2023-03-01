import Usuario from '../../models/Usuario.js';
import generarId from '../../helpers/generarId.js'

//TODO: generar el jwt

const registerUserService = async(body) => {

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

        const { email } = body;
        const existeUsuario = await Usuario.findOne({ email });

        if(existeUsuario){
            const error = new Error("Usuario ya registrado");
            return res
        }

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

export { 
    registerUserService
};