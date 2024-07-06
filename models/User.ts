import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true },
  username: {
    type: String,
    unique: true,
    min: 3,
    max: 20,
  },
  password: { type: String, select: false },
  role: { type: String, default: "user" },
  image: { type: String },
  isActive: {
    type: Boolean,
    default: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  authProviderId: { type: String },
});

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
