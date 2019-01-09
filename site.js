const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile('home.html');
});
app.get('/projects', (req, res) => {
    res.sendFile(__dirname + '/front_end/projects.html');
});
app.get('/:pic', (req, res) => {
    res.sendFile(__dirname + '/front_end/' + req.params.pic);
});

app.listen(8001, () => console.log('Personal website listening on port 8001.'));
