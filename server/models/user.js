const { getDb } = require("../config");

class User {
  static getCollection() {
    const collection = getDb().collection("users");
    return collection;
  }

  static async findAll(name, gender, address) {
    try {
      const collection = this.getCollection();
      let users = null;
      if (name) {
        users = await collection.find().sort({ firstName: 1 }).toArray();
      } else if (gender) {
        users = await collection.find().sort({ gender: 1 }).toArray();
      } else if (address) {
        users = await collection.find().sort({ addr: -1 }).toArray();
      } else {
        users = await collection.find().toArray();
      }

      return users;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = User;
