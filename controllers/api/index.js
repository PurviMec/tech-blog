const router = require('express').Router();

const bloggersRoutes = require('./bloggers-routes');

router.use('/bloggers', bloggersRoutes);

module.exports = router;