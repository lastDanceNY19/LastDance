var express = require('express');
var path1 = require('path');
var app = express();
var PORT = 3000;
// Development
if (process.env.NODE_ENV = 'production') {
    app.use('/build', express.static(path1.join(__dirname, '../build')));
    // serve index.html on the route '/'
    app.get('/', function (req, res) {
        res.sendFile(path1.join(__dirname, '../build/index.html'));
    });
}
;
app.listen(PORT, function () { return console.log('itworks'); });
