const User = require("./models/User");
// const Contact = require("./models/Contact");

module.exports = function(req, res, next) {
  req.database = { User };
  // req.database = { Contact };
  next();
};
