import express from "express";
const router = express.Router();
import { SignUp, SignIn } from "../controllers/auth.Controller.js";

router.post("/signup", SignUp);
router.post("/signin", SignIn);

export default router;
