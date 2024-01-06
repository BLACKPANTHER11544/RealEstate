import UserModel from "../models/user.module.js";
import bcryptjs from "bcrypt";
import { errorHandler } from "../utilis/error.js";
import jwt from "jsonwebtoken";

export const SignUp = async (req, res, next) => {
  const { username, password, email } = req.body;
  const hashPass = bcryptjs.hashSync(password, 10);
  try {
    const newUser = new UserModel({ username, password: hashPass, email });
    await newUser.save();
    res.status(200).json({
      message: "User created SuccessFully",
    });
  } catch (error) {
    next(error);
  }
};

export const SignIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const validUser = await UserModel.findOne({ email });
    if (!validUser) return next(errorHandler(404, "Invalid User"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(404, "Wrong credentials"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access-token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
// note username = test1 , password = test1 , this is for testing purpose

export const GoogleF = async (req, res, next) => {
  try {
    const validUser = await UserModel.findOne({ email: req.body.email });
    if (validUser) {
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = user._doc;
      res
        .cookie("access-token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      const generatePassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hanshedPassword = bcryptjs.hashSync(generatePassword, 10);
      const newUser = new UserModel({
        username:
          req.body.name.split(" ").join("").toLowerCase() +
          Math.random().toString(36).slice(-6),
        email: req.body.email,
        password: hanshedPassword,
        avatar: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = newUser._doc;
      res
        .cookie("access-token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};
