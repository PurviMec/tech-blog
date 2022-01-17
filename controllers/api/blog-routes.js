const router = require('express').Router();
const { Blog, Bloggers, Comment } = require('../../models');
const withAuth = require("../../utils/auth");

// PATH : http://localhost:3001/api/blog
router.get('/',withAuth,(req, res) => {
    console.log('============');
    Blog.findAll({
        attributes: ['id', 'title', 'content', 'created_at'],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'bloggers_id', 'blog_id', 'created_at'],
                include: {
                    model: Bloggers,
                    attributes: ['username']
                }
            },
            {
                model: Bloggers,
                attributes: ['username']
            }
        ]
    })
        .then(dbBlogData => res.json(dbBlogData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PATH : http://localhost:3001/api/blog/:id
router.get('/:id', (req, res) => {
    Blog.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'title', 'content', 'created_at'],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text','created_at'],
          include: {
              model: Blog,
              attributes: ['title']
          }
        },
        {
          model: Bloggers,
          attributes: ['username']
        }
      ]
    })
      .then(dbBlogData => {
        if (!dbBlogData) {
          res.status(404).json({ message: 'No blog found with this id' });
          return;
        }
        res.json(dbBlogData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.post('/',withAuth, (req, res) => {
    const body = req.body;
    console.log(req.session.bloggersId)
    Blog.create({
      ...body, bloggersId: req.session.bloggersId
    })
      .then(dbBlogData => res.json(dbBlogData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.put('/:id',withAuth, (req, res) => {
  console.log(req.body, req.params.id)
    Blog.update(req.body,
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbBlogData => {
        if (!dbBlogData) {
          res.status(404).json({ message: 'No blog found with this id' });
          return;
        }
        res.json(dbBlogData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});
  
router.delete('/:id',withAuth, (req, res) => {
    Blog.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbBlogData => {
        if (!dbBlogData) {
          res.status(404).json({ message: 'No blog found with this id' });
          return;
        }
        res.json(dbBlogData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});
    
module.exports = router;