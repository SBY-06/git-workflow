const { comparePassword, signToken, hashPassword } = require("../helpers/helper");
const { User } = require("../models");

class UserController {
  static async register(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.create({ email, password: hashPassword(password) });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async login(request, response) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new Error("Email & Password Required!");
      }

      const user = await User.findOne({ where: { email } });

      if (!user || !comparePassword(password, user.password)) {
        throw new Error("Wrong Email / Password!");
      }

      response.status(200).json({ user: signToken(user.id) });
    } catch (error) {
      response.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = UserController;
