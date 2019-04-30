const express = require("express");
const router = express.Router();

router
  .route("/contacts")
  .get((req, res) => {
    return new req.database.Contact()
      .fetchAll()
      .then(contacts => {
        return res.json(contacts);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  })
  .post((req, res) => {
    console.log("hitting");
    const name = req.body.name;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const address = req.body.address;
    console.log("post", req.body);
    return new req.database.Contact({ name, email, mobile, address })
      .save()
      .then(contact => {
        return res.json({ success: true });
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  });

module.exports = router;
