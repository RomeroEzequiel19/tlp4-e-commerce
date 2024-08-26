import Product from "../models/Product.js";

class ProductService {
  constructor() {}

  async findAll() {
    return await Product.find();
  }

  async create(product) {
    const newProduct = new Product(product);
    return await newProduct.save();
  }

  async update(id, product) {
    return await Product.findByIdAndUpdate(id, product);
  }

  async update(product) {
    return await Product.update(product);
  }

  async delete(id) {
    return await Product.findByIdAndDelete(id);
  }
}

export default new ProductService();
