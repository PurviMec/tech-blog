const router = require('express').Router();
const sequelize = require('../config/connection');
const { Blog, Bloggers, Comment } = require('../models');

router.get('/', (req, res) => {
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
        .then(dbBlogData => {
            console.log(dbBlogData[0])
            const blogs = dbBlogData.map(blog => blog.get({ plain: true }));
            res.render('all-blogs', { blogs });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

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
        if(dbBlogData) {
            const blogs = dbBlogData.get({ plain: true });
            res.render('single-blog', {blogs});
        } else {
            res.status(500).json(err);
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  
    res.render("login");
});
  
router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  
    res.render("signup");
});

module.exports = router;