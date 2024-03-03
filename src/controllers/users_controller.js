const User = require('../models/user');

module.exports = {
  index: (req, res) => {
    res.render('users/index', { users: User.todos() });
  },
};
