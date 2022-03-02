const router = require('express').Router();
const userRoutes = require('./users_routes');
const thoughtRoutes = require('./thoughts_routes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
