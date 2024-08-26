import { model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: String,
    lastname: String,
    date: Number,
    rol: String,
  },
  {
    timestamps: true,
  }
);

export default model("users", UserSchema);
