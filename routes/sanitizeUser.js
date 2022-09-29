import express from "express";
import {  updatedResponse } from "../controllers/userController.js";
import { sanitizeName, stringToNumbers, sortFavBands } from "../middleware/updateData.js";


let router = express.Router();

router.route("/").post(stringToNumbers, sanitizeName, sortFavBands, updatedResponse);

export default router;
