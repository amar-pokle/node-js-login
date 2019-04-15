// var bodyParser = require("body-parser");
// var express = require('express');

// var app = express();

// app.use(bodyParser.urlencoded({
//     extended: false
// }));app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/index.html');
//     // otherwise this line can also use -> res.sendFile('index.html', { root: __dirname });
//     // to write content on response page -> res.send('Ok'); or res.write('Ok) 

// });


// app.post('/submit-student-data', function (req, res) {
//     var name = req.body.firstName + ' ' + req.body.lastName;
//     // var sum=eval(fnumber+snumber)
//     // res.send(name + ' Submitted Successfully!');
//     //res.send(`Sumitted Successfully ${name}`);
// });


// var server = app.listen(5000, function () {
//     console.log('Node server is running..');
// });
var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' Submitted Successfully!');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});