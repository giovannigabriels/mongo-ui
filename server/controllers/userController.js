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
  static async findOne(req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.findOne(id);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  static async edit(req, res, next) {
    try {
      const { email, addr } = req.body;
      const { id } = req.params;
      if (!email) {
        throw { name: "email_missing" };
      }
      if (!addr) {
        throw { name: "addr_missing" };
      }
      await User.update({ email, addr }, id);
      res.status(200).json({ message: `User ${id} Success update ` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
