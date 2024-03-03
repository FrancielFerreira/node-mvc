const User = require('../models/user');

module.exports = {
  index: async (req, res) => {
    res.render('users/index', { users: await User.todos() });
  },
};
