import { model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: String,
    lastname: String,
    date: Number,
    nameUser: String,
    password: String,
    done: Boolean,
    rol: {
      nameRol: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model("users", UserSchema);
