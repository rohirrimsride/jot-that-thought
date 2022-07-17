// Makes modules or other locations available in this file
const express = require('express')
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes/notesRoute');
const htmlRoutes = require('./routes/htmlRoutes');

// middleware for parsing incoming requests carrying url info
app.use(express.urlencoded({ extended: true }));

// middleware for parsing incoming requests carrying JSON info
app.use(express.json());

app.use(express.static('public'));

// api file locations
app.use('/api', apiRoutes);

app.use('/', htmlRoutes);

// Calls PORT
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}.`);
});

