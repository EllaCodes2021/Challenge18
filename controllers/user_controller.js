const { User } = require('../models/User');

const userController = {
  // get all users
    getAllUser(req, res) {
        User.find({})
        .populate({
            path: 'thoughts',
            select:'-__v'
        })
        .select('-__v')
        .sort({ _id: -1 })
        .then(dbUserData => res.json(dbUserData))
        .catch
    }
};

module.exports = userController;
