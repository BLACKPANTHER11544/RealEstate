import express from "express";
const router = express.Router();
import { SignUp, SignIn, GoogleF } from "../controllers/auth.Controller.js";

router.post("/signup", SignUp);
router.post("/signin", SignIn);
router.post("/google", GoogleF);

export default router;
