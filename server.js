const exp = require('constants');
const express = require('express')


const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes/notesRoute');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}.`);
});

