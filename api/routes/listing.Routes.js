import express from "express";
import { VerifyUserToken } from "../utilis/verifyUserToken.js";
import { createListing } from "../controllers/listing.Controller.js";
const router = express.Router();

router.post("/create", VerifyUserToken, createListing);

export default router;
