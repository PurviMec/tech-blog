const Bloggers = require('./Bloggers');
const Blog = require('./Blog');

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

Comment.hasMany(Blog,{
    foreignKey: 'blog_id'
});

Blog.hasMany(Comment, {
    foreignKey: 'blog_id'
});

module.exports = {Bloggers, Blog};