import express from "express";
const router = express.Router();//Esto lo da express
import {
    createDirectionController,
    listDirecionsController
} from "../../controllers/direction/direction.js"

router.post("/",createDirectionController);
router.get("/",listDirecionsController);

export default router;