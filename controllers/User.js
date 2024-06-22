import { JWT_SECRET } from "../config/config.js";
import User from "../model/UserModel.js";

const user = async (req, res) => {
  try {
    const cookie = req.cookies["jwt"];

    const claims = jwt.verify(cookie, JWT_SECRET);

    if (!claims) {
      return res.status(401).send({
        message: "Unauthenticated",
      });
    }

    const user = await User.findOne({
      _id: claims._id,
    });

    const { password, ...data } = await user.toJSON();

    res.send(data);
  } catch (e) {
    res.status(401).send({
      message: "Unauthenticated",
    });
  }
};

export default user;
