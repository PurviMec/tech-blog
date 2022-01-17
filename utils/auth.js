const withAuth = (req, res, next) => {
    if(!req.session.bloggersId){
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;