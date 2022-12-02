const { ObjectId } = require("bson");
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
      throw error;
    }
  }

  static async findOne(id) {
    try {
      const collection = this.getCollection();
      const user = await collection.findOne({ _id: ObjectId(id) });
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async update(payload, id) {
    try {
      const collection = this.getCollection();
      const res = await collection.updateOne(
        { _id: ObjectId(id) },
        { $set: payload }
      );
      return res;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = User;
