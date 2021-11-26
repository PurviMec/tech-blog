const router = require('express').Router();
const {Bloggers} = require('../../models');

// GET /api/bloggers
router.get('/', (req, res) => {});

// GET /api/bloggers/1
router.get('/:id', (req, res) => {});

// POST /api/bloggers
router.post('/', (req, res) => {});

// PUT /api/bloggers/1
router.put('/:id', (req, res) => {});

// DELETE /api/bloggers/1
router.delete('/:id', (req, res) => {});



module.exports = router;