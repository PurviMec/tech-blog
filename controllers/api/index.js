const router = require('express').Router();

const bloggersRoutes = require('./bloggers-routes');
const blogsRoutes = require('./blogs-routes');

router.use('/bloggers', bloggersRoutes);
router.use('/blogs', blogsRoutes);

module.exports = router;