import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { conectarDB } from "./config/db.js";

import userRoutes from './routes/users/userRoutes.js';
import directionRoutes from './routes/directions/directionRoutes.js';

// TODO: rutas 

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

dotenv.config();

conectarDB();

//const whitelist = [process.env.FRONTEND_URL];

// const corsOptions = {
//     origin: function(origin,callback){
//         if(whitelist.includes(origin)){
//             //Puede consultar la api
//             callback(null, true);
//         }else{
//             //No esta permitido su request
//             callback(new Error('Error de CORS'));
//         }
//     }
// };

//app.use(cors(corsOptions));

//Routing
app.use("/api/usuarios",userRoutes);
//Direction
app.use("/api/direccion",directionRoutes);

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

