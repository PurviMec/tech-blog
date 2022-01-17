const router = require('express').Router();
const { Comment } = require('../../models');

// http://localhost:3001/api/comment
router.post('/', (req, res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        bloggers_id: req.body.bloggers_id,
        blog_id: req.body.blog_id
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
      
});

// http://localhost:3001/api/comment
router.get('/', (req, res) => {

});

// http://localhost:3001/api/comment/:id
router.delete('/:id', (req, res) => {

});

module.exports = router;
