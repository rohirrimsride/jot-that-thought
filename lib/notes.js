const fs = require('fs');
const path = require('path');

function retrieveNotes(req, notes) {
    return notes;  
}

function saveNotes(body, notes) {
    const newNote = body;
    notes.push(newNote);
    
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    return newNote;
}

function validateNotesTitle(notes) {
    if (!notes.title || typeof notes.title !== 'string') {
        return false;
    }
    return true;
}

function validateNotesText(notes) {
    if (!notes.text || typeof notes.text !== 'string') {
        return false;
    }
    return true;
}

function deleteNotes(notes) {
    
}

module.exports = {
    retrieveNotes,
    saveNotes,
    validateNotesTitle,
    validateNotesText,
    deleteNotes
};