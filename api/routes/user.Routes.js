import express from "express";
const router = express.Router();
import { test, updateUser } from "../controllers/user.Controller.js";
import { VerifyUserToken } from "../utilis/verifyUserToken.js";

router.get("/test", test);
router.put("/updateUser/:id", VerifyUserToken, updateUser);

export default router;
