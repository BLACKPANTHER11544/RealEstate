import express from "express";
const router = express.Router();
import {
  test,
  updateUser,
  deleteUser,
  getUserListings,
  getLandLord,
} from "../controllers/user.Controller.js";
import { VerifyUserToken } from "../utilis/verifyUserToken.js";

router.get("/test", test);
router.put("/updateUser/:id", VerifyUserToken, updateUser);
router.delete("/deleteUser/:id", VerifyUserToken, deleteUser);
router.get("/listings/:id", VerifyUserToken, getUserListings);
router.get("/:id", VerifyUserToken, getLandLord);

export default router;
