
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
    req.body.id = (notes.length + 1).toString();

    if (!validateNotesTitle(req.body)) {
        res.status(400).send('Please add a note title');
    } else if (!validateNotesText(req.body)) {
        res.status(400).send('Please add text to this note');
    } else {
        const newNote = saveNotes(req.body, notes);
        
        res.json(newNote);
    }
});

router.delete('/notes/:id', (req, res) => {
    console.log(req.params.id);
    res.send({
        message: "Note deleted", 
        id: req.params.id
    });
});

module.exports = router;