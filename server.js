const express = require('express');
const app = express();
const path = require('path');

app.use('/qibla', express.static(path.join(__dirname, 'build')));

app.get('/qibla', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

app.get('/qibla/favicon.ico', function (req, res) {
    res.sendFile(path.join(__dirname, 'favicon.ico'))
});

app.listen(3000, () => {
    console.log("server is runnig on port 3000");
    console.log("Open your browser and hit url 'localhost:3000/qibla'");
});