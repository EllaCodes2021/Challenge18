const router = require('express').Router();
const apiRoutes = require('./api/api_index');


router.use('/api', apiRoutes);

module.exports = router;