const router = require('express').Router();

//friends
const {
    createfriends,
    deletefriends
} = require('');

// Reactions
router
    .route('/userId/friends/:friendId')
    .post(createfriends);

  // /api/friends/:id
router
    .route('/userId/friends/:friendId')
    .delete(deletefriends);

module.exports = router;