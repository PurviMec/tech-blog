const router = require('express').Router();

const bloggersRoutes = require('./bloggers-routes');
const blogRoutes = require('./blog-routes');

router.use('/bloggers', bloggersRoutes);
router.use('/blog', blogRoutes);

module.exports = router;