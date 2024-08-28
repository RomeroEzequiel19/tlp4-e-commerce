import Category from "../models/Category.js";

class CategoryService {
  constructor() {}

  async findAll() {
    return await Category.find();
  }

  async create(category) {
    const newCategory = new Category(category);
    return await newCategory.save();
  }

  async update(id, category) {
    return await Category.findByIdAndUpdate(id, category);
  }

  async delete(id) {
    return await Category.findByIdAndDelete(id);
  }
}

export default new CategoryService();
