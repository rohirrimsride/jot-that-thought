// Makes other resources or modules avialable in this file
const path = require('path');
const router = require('express').Router();

// returns the index.html in the public directory
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// returns the notes.html in the public folder
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// returns random requests to the index.html file
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// makes this page an available resource to other files
module.exports = router;