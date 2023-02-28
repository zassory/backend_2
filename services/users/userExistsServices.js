import Usuario from '../../models/Usuario.js';

const userExistsServices =  async(body) => {
    try{

        const { email } = body;
        const existeUsuario = await Usuario.findOne({email});
        return { existeUsuario };

    }catch(error){

    };
}

export {
    userExistsServices
}