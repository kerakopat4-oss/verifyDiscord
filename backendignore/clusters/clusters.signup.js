import mongoose from "mongoose";

const signupSchema = new mongoose.Schema(
  {
    discordUserName: { type: String, required: true },
    discordId: { type: Number, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    otherSocial: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    sex: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Signup", signupSchema);
