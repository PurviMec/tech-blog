const Bloggers = require('./Bloggers');
const Blog = require('./Blog');

Bloggers.hasMany(Blog, {
    foreignKey: 'bloggers_id'
});

Blog.belongsTo(Bloggers, {
    foreignKey: 'bloggers_id'
});

module.exports = {Bloggers, Blog};