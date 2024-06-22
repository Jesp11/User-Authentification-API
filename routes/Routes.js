import express from "express";
const router = express.Router();
import register from "../controllers/Register.js";
import login from "../controllers/Login.js";
import user from "../controllers/User.js";
import logout from "../controllers/Logout.js";

router.post("/register", register);

router.post("/login", login);

router.get("/user", user);

router.post("/logout", logout);

export default router;
