const User = require("../models/user");

class Controller {
  static async findAll(req, res, next) {
    try {
      const { name, gender, address } = req.query;
      const users = await User.findAll(name, gender, address);

      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
