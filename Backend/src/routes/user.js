import express from "express";
import {
  userSignin,
  getUserProfile,
  otherUsersProfile
} from "../controllers/userController.js";

const router = express.Router();

const loginUser = (req, res) => {
  res.send("Login page");
};

router.post("/login", loginUser);
router.post("/signin", userSignin);
router.get("/me", getUserProfile);
router.get("/:username", otherUsersProfile);

export default router;
