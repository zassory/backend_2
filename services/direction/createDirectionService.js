import Direccion from "../../models/Direction";


const createDirectionService = async() => {
  
    let direction = new Direccion({
        nombre: body.nombre,
        nombreDirector: body.nombreDirector
    });
    try{

        await direction.save();

        return {
            statusCode:200,
            ok:true,
            nombre: direction.nombre,
            nombreDirector : direction.nombreDirector
        };

    }catch(error){
        console.log(error);
    }
}

export {
    createDirectionService
}
