const Bloggers = require('./Bloggers');
const Blog = require('./Blog');
const Comment = require('./Comment');

Bloggers.hasMany(Blog, {
    foreignKey: 'bloggers_id'
});

Blog.belongsTo(Bloggers, {
    foreignKey: 'bloggers_id'
});

Comment.belongsTo(Bloggers, {
    foreignKey: 'bloggers_id'
});

Bloggers.hasMany(Comment, {
    foreignKey: 'bloggers_id'
});

Comment.belongsTo(Blog,{
    foreignKey: 'blog_id'
});

Blog.hasMany(Comment, {
    foreignKey: 'blog_id'
});

module.exports = {Bloggers, Blog, Comment};