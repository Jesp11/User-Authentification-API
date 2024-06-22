import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";
import User from "../model/UserModel.js";

const login = async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) {
    return res.status(404).send({
      message: "User not found",
    });
  }

  if (!(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(400).send({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      _id: user._id,
    },
    JWT_SECRET
  );

  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.send({
    message: "Success",
  });
};

export default login;
