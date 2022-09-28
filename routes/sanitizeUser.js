import express from "express";
import {  updatedResponse } from "../controllers/userController.js";
import { capitalizeName, convertInNum, sortFavBands } from "../middleware/updateData.js";


let router = express.Router();

router.route("/").post(capitalizeName, convertInNum, sortFavBands, updatedResponse);

export default router;
