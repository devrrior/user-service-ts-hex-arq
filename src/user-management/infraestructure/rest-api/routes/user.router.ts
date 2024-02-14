import express from "express";
import {userController} from "../../dependecies"

export const router = express.Router();

router.post(
    "/",
    userController.registerUser.bind(userController)
);

router.post(
    "/activate/:activationCode",
    userController.activateUser.bind(userController)
);