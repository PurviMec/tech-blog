const router = require('express').Router();
const {Bloggers} = require('../../models');

// GET /api/bloggers
router.get('/', (req, res) => {
    Bloggers.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbBloggersData => res.json(dbBloggersData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// GET /api/bloggers/1
router.get('/:id', (req, res) => {
    Bloggers.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        }
    })
        .then(dbBloggersData => {
            if(!dbBloggersData){
                res.status(400).json({ message: 'No Blogger found with this id'});
                return;
            }
            res.json(dbBloggersData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
});

// POST /api/bloggers
router.post('/', (req, res) => {
    Bloggers.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbBloggersData => res.json(dbBloggersData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// PUT /api/bloggers/1
router.put('/:id', (req, res) => {
    Bloggers.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbBloggersData => {
        if (!dbBloggersData[0]) {
            res.status(404).json({ message: 'Blogger can not found'})
            return;
        }
        res.json(dbBloggersData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// DELETE /api/bloggers/1
router.delete('/:id', (req, res) => {
    Bloggers.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbBloggersData => {
            if(!dbBloggersData){
                res.status(404).json({ message: 'no blogger with this id found'})
                return;
            }
            res.json(dbBloggersData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});



module.exports = router;