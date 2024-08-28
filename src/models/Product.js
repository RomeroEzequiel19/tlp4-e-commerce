import { model, Schema } from "mongoose";
import Category from "./Category.js";

const ProductSchema = new Schema(
  {
    name: String,
    description: String,
    price: Number,
    stock: Number,
    categories: [
      {
        type: Schema.Types.ObjectId,
        ref: "category",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const productos = model("products", ProductSchema);
export default { productos };
