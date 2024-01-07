import express from "express";
const router = express.Router();
import { SignUp, SignIn, google } from "../controllers/auth.Controller.js";

router.post("/signup", SignUp);
router.post("/signin", SignIn);
router.post("/google", google);

export default router;
