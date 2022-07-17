// Makes other resources or modules avialable in this file
const router = require('express').Router();
const { retrieveNotes, saveNotes, validateNotes, deleteNotes } = require('../../lib/notes');

// GET api route logic
router.get('/notes', (req, res) => {
    
    if (req) {
        
        let notesList = retrieveNotes(req);
        
        res.json(notesList);
    }     
});

// POST api route logic
router.post('/notes', (req, res) => {
    

    if (!validateNotes(req.body)) {
        res.status(400).send('There is a missing title or text.');
    } else {
        const newNote = saveNotes(req.body);
        
        res.json(newNote);
    }
});

// DELETE api route logic
router.delete('/notes/:id', (req, res) => {
    
    if (req.params.id) {
        deleteNotes(req.params.id);
        
        res.json(`Note successfully deleted`);
    }  
});

module.exports = router;