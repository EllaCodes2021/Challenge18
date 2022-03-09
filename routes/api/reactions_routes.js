(:thoughtId/reactions)
const router = require('express').Router();

// Reactions
const {
    createReactions,
    deleteReactions
} = require('');

// Reactions
router
    .route('/')
    .post(createReactions);

  // /api/Reactions/:id
router
    .route('/:id')
    .delete(deleteReactions);

module.exports = router;