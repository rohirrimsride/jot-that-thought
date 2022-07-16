const fs = require('fs');
const path = require('path');

function retrieveNotes(req, notes) {
    return notes;  
}

function saveNotes(req, notes) {
    const newNotes = req.body;
    notes.push(newNotes);
    fs.writeFile(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    return newNotes;
}

function validateNotesTitle(req, notes) {
    if (!req.body.title || typeof req.body.title !== 'string') {
        return false;
    }
    return true;
}

function validateNotesText(req, notes) {
    if (!req.body.text || typeof req.body.text !== 'string') {
        return false;
    }
    return true;
}

module.exports = {
    retrieveNotes,
    saveNotes,
    validateNotesTitle,
    validateNotesText
};