import express from "express";
import Signup from "../clusters/clusters.signup.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = new Signup(req.body);
    await user.save();
    res.json({ message: "Signup success ✅", user });
  } catch (err) {
    res.status(500).json({ message: "DB Insert failed ❌", error: err.message });
  }
});

export default router;
