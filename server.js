const exp = require('constants');
const express = require('express')
const router = express.Router();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}.`);
});

