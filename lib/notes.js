const fs = require('fs');
const path = require('path');
const db = require('../db/db.json');

function retrieveNotes(req) {
    let data = fs.readFileSync('./db/db.json', {
        encoding: 'utf8',
    })
    let notesList = JSON.parse(data);

    return notesList;  
}

function saveNotes(body) {
    let data = fs.readFileSync('./db/db.json', {
        encoding: 'utf8',
    });
    let oldNotes = JSON.parse(data);
    let notesArray = oldNotes;
    
    body.id = notesArray.length.toString();

    const newNote = body;
    
    notesArray.push(newNote);
    
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    
    return;
}

function validateNotes(notes) {
    if (!notes.title || typeof notes.title !== 'string') {
        return false;
    }
    if (!notes.text || typeof notes.text !== 'string') {
        return false;
    }

    return true;
}

function deleteNotes(req) {

    let data = fs.readFileSync('./db/db.json', {
        encoding: 'utf8',
    });
    
    let oldNotes = JSON.parse(data);
    
    let newNotes = oldNotes.filter(item => item.id != req);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(newNotes, null, 2), {
            encoding: 'utf8',
            flag: 'w'
    });
    
    return;  
}

module.exports = {
    retrieveNotes,
    saveNotes,
    validateNotes,
    deleteNotes,
};