import UserModel from "../models/user.module.js";
import bcryptjs from "bcrypt";

export const SignUp = async (req, res) => {
  const { username, password, email } = req.body;
  const hashPass = bcryptjs.hashSync(password, 10);
  try {
    const newUser = new UserModel({ username, password: hashPass, email });
    await newUser.save();
    res.status(200).json({
      message: "User created SuccessFully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
