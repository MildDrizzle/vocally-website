import { Router } from "express";
import { newUser } from "../controllers/FormController";

export const formRoutes = Router();

formRoutes.post("/", newUser);
