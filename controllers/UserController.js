const User = require("../models/index").User;
const bcrypt = require("bcryptjs");

module.exports = class UserController {
  static async register(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.create({ email, password: bcrypt.hashSync(password) });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};
