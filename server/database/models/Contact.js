const bookshelf = require("../bookshelf");

class User extends bookshelf.Model {
  get tableName() {
    return "contacts";
  }
  get hasTimestamps() {
    return false;
  }
}

module.exports = bookshelf.model("Contact", Contact);
