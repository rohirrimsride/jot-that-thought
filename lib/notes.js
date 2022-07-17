// Makes other resources or modules avialable in this file
const fs = require('fs');
const path = require('path');

// reads the db.json file and returns the contents
function retrieveNotes(req) {
    let data = fs.readFileSync('./db/db.json', {
        encoding: 'utf8',
    })
    let notesList = JSON.parse(data);

    return notesList;  
}

// reads the db.json file and pushes the new note into the array and then writes it to the file
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

// validates that all the required parts of a note (title, text) are present
function validateNotes(notes) {
    if (!notes.title || typeof notes.title !== 'string') {
        return false;
    }
    if (!notes.text || typeof notes.text !== 'string') {
        return false;
    }

    return true;
}

// reads the db.json file and then deletes the entry matching the request and rewrites the file
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

// Exports these funtions to be called in notesRoute for the api's
module.exports = {
    retrieveNotes,
    saveNotes,
    validateNotes,
    deleteNotes,
};