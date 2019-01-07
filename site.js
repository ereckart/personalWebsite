const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Loading.');
});

app.listen(8001, () => console.log('Personal website listening on port 8001.'));