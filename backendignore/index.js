import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Signup from "./routes/route.signup.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const mongoosedb = process.env.MONGO_URI;

app.use(cors({
  origin: "https://verify-discord-one.vercel.app/", 
  methods: ["GET","POST","PUT","DELETE"]
}));

app.use(express.json());

async function dbconnect() {
  try {
    await mongoose.connect(mongoosedb);
    console.log("Connected to DB ✅");
  } catch (err) {
    console.log("DB Connection Failed ❌", err);
  }
}

await dbconnect();

app.use("/api/signup", Signup);

app.get("/home", (req, res) => {
  res.send("Server working ✅");
});

app.listen(port, () => {
  console.log(`Server started 🚀 on http://localhost:${port}`);
});


