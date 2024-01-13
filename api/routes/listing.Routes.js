import express from "express";
import { VerifyUserToken } from "../utilis/verifyUserToken.js";
import {
  createListing,
  deleteListing,
} from "../controllers/listing.Controller.js";
const router = express.Router();

router.post("/create", VerifyUserToken, createListing);
router.delete("/delete/:id", VerifyUserToken, deleteListing);

export default router;
