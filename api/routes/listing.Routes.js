import express from "express";
import { VerifyUserToken } from "../utilis/verifyUserToken.js";
import {
  createListing,
  deleteListing,
  updateListing,
  getListing,
  getListings,
} from "../controllers/listing.Controller.js";
const router = express.Router();

router.post("/create", VerifyUserToken, createListing);
router.delete("/delete/:id", VerifyUserToken, deleteListing);
router.post("/update/:id", VerifyUserToken, updateListing);
router.get("/get/:id", getListing);
router.get("/get", getListings);

export default router;
