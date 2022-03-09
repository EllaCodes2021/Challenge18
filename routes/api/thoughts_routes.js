const router = require('express').Router();

//Thoughts
const {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
    updateThoughts,
    deleteThoughts
} = require('');

// Reactions
router
    .route('/')
    .get(getAllThoughts)
    .post(createThoughts);

  // /api/Thoughts/:id
router
    .route('/:id')
    .get(getThoughtsById)
    .put(updateThoughts)
    .delete(deleteThoughts);

module.exports = router;
