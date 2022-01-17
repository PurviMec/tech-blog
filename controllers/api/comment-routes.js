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

module.exports = router;
