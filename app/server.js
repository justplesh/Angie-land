const express = require('express');
const app = express();

app.use(express.static('./'));

app.listen(5001, 'localhost', () => console.log('listening'));

app.get('*', function (req, res) {
    res.statusCode = 200;
    res.sendFile(__dirname + '/index.html');
});