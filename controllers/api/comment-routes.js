const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require("../../utils/auth");

// http://localhost:3001/api/comment
router.post('/', (req, res) => {
    Comment.create({
        ...req.body, bloggersId: req.session.bloggersId
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
      
});

module.exports = router;
