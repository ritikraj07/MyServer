const express = require('express');
const app = express();
const db = require('./db.json');

app.get('/posts', (req, res) => {
    res.json(db.posts);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
