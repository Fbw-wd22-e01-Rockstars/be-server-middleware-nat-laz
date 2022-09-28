import express from "express";
import { validationResponse } from "../controllers/userController.js";
import { isAdult, checkValues } from "../middleware/validation.js";


let router = express.Router();

router.route("/").post(checkValues, isAdult, validationResponse);

export default router;
