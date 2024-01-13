import ListingModel from "../models/Listing.module.js";
import { errorHandler } from "../utilis/error.js";

export const createListing = async (req, res, next) => {
  try {
    const listing = await ListingModel.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};
export const deleteListing = async (req, res, next) => {
  const listing = await ListingModel.findById(req.params.id);

  if (!listing) {
    return next(errorHandler(404, "Listing not found!"));
  }

  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, "You can only delete your own listings!"));
  }

  try {
    await ListingModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Listing has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const updateListing = async (req, res, next) => {
  const listing = await ListingModel.findById(req.params.id);
  if (!listing) {
    return next(errorHandler(404, "Listing Not Found!!"));
  }
  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, "You can only Update Your Own Listings"));
  }
  try {
    const updatedListing = await ListingModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(201).json(updatedListing);
  } catch (error) {
    next(error.message);
  }
};

export const getListing = async (req, res, next) => {
  try {
    const Listing = await ListingModel.findById(req.params.id);
    if (!Listing) {
      return next(errorHandler(404, "Listing Not Found"));
    }
    res.status(201).json(Listing);
  } catch (error) {
    next(error.message);
  }
};
