const express = require('express');
const path = require('path');
const app = express();
const port = 3100;

app.use(express.static('public'));

app.get('/', (req, res) => {
    let pathFile = path.resolve(__dirname, 'pages/index.html')
    res.sendFile(pathFile);
});

app.get('/contact', (req, res) => {
    let pathFile = path.resolve(__dirname, 'pages/contact.html')
    res.sendFile(pathFile);
});

app.listen(port, () => {
    console.log(`Aplikasi berjalan pada port ${port}`);
});