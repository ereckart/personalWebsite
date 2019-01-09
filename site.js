const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Loading.');
});
app.get('/projects', (req, res) => {
    res.sendFile('front_end/projects.html');
});

app.listen(8001, () => console.log('Personal website listening on port 8001.'));