const router = require('express').Router();

//User
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('');

// User
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

  // /api/User/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;

// BONUS: Remove a user's associated thoughts when deleted.
