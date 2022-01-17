const router = require("express").Router();
const {Blog} = require('../models');

router.get("/", (req, res) => {
    Blog.findAll({
      where: {
        bloggersId: req.session.bloggersId
      }
    })
      .then(dbBlogData => {
        const blogs = dbBlogData.map(blog => blog.get({ plain: true }));
        res.render("all-blogs-admin", {
          layout: "dashboard",
          blogs
        });
      })
      .catch(err => {
        console.log(err);
        res.redirect("login");
      });
  });

router.get("/new", (req, res) => {
    res.render("new-blog", {
        layout: "dashboard"
    });
});
  
router.get(":id", withAuth, (req, res) => {
    Blog.findByPk(req.params.id)
        .then(dbBlogData => {
            if (dbBlogData) {
                const blogs = dbBlogData.get({ plain: true });
          
                res.render("edit-blog", {
                layout: "dashboard",
                blogs
            });
            } else {
                res.status(404).end();
            }
        })
      .catch(err => {
        res.status(500).json(err);
      });
});
  
module.exports = router;