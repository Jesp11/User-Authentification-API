import bcrypt from "bcryptjs";
import User from "../model/UserModel.js";

const register = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  const result = await user.save();

  const { password, ...data } = result.toJSON();

  res.send(data);
};
export default register;
