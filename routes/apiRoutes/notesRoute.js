
const router = require('express').Router();
const { retrieveNotes, saveNotes, validateNotesTitle, validateNotesText } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    if (req) {
        results = retrieveNotes(req, results);
    }
    res.json(results);
});

router.post('/notes', (req, res) => {
    console.log(req);
    if (!validateNotesTitle(req.body)) {
        res.status(400).send('Please add a note title');
    } else if (!validateNotesText(req.body)) {
        res.status(400).send('Please add text to this note');
    } else {
        const newNote = saveNotes(req.body, notes);
        console.log(newNote);
        res.json(newNote);
    }
});

module.exports = router;