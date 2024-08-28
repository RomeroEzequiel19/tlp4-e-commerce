import { model, Schema } from "mongoose";

const CategorySchema = new Schema(
  {
    name_category: {
      type: String,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

const Category = model("category", CategorySchema);

export default Category;
