import express from "express";
const router = express.Router();//Esto lo da express
import {
    createUserController
} from '../../controllers/users/user.js';


router.post("/",createUserController);

export default router