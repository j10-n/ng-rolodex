const express = require("express");
const router = express.Router();

router
  .route("/users")
  .get((req, res) => {
    return new req.database.User()
      .fetchAll()
      .then(users => {
        return res.json(users);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  })
  .post((req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const email = req.body.email;
    const address = req.body.address;

    return new req.database.User({ username }, { name }, { email }, { address })
      .save()
      .then(user => {
        return res.json({ success: true });
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  });

module.exports = router;
