import User from "../models/Users";

class UserService {
  constructor() {}

  async findAll() {
    return await User.find();
  }

  async create(user) {
    const newUser = new Product(user);
    return await newUser.save();
  }

  async update(id, user) {
    return await User.findByIdAndUpdate(id, user);
  }

  async update(user) {
    return await User.update(user);
  }

  async delete(id) {
    return await User.findByIdAndDelete(id);
  }
}

export default new UserService();
