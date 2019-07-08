const User = require('../models/User.model');

module.exports = {
  create: (req, res) => {
    const { firstname, lastName, age, password, email, team } = req.body;
    const _User = new User({
      firstname,
      lastName,
      age,
      password,
      email,
      team
    });
    _User
      .save()
      .then((result) => {
        res.json({ success: true, result });
      })
      .catch((err) => {
        res.json({ success: false, result: err });
      });
  },
  update: (req, res) => {
    const { _id } = req.body;
    User.update({ _id }, req.body)
      .then((user) => {
        if (!user) {
          return res.json({ success: false, user: 'User does not exit' });
        }
        res.json({ success: true, result });
      })
      .catch((err) => {
        res.json({ success: false, result: err });
      });
  }
};
