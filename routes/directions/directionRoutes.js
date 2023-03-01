import express from "express";
const router = express.Router();//Esto lo da express
import {
    createDirectionController 
} from "../../controllers/direction/direction.js"

router.post("/",createDirectionController);