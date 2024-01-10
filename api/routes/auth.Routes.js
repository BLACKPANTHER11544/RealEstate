import express from "express";
const router = express.Router();
import {
  SignUp,
  SignIn,
  google,
  signOut,
} from "../controllers/auth.Controller.js";

router.post("/signup", SignUp);
router.post("/signin", SignIn);
router.post("/google", google);
router.get("/signOut", signOut);

export default router;
