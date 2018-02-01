const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));


// Opgave 1
app.get('/api/test', (req, res) => {
    res.json({
        text: "Hello World"
    });
});

app.get('/api/opgave', (req, res) => {
    res.json({
        Navn: "Andreas",
        Efternavn: "Kraft",
        Alder: "24",
        By: "Albertslund"
    });
});

// Opgave 2
app.get('/api/route1', (req, res) => {
    res.json({
        Farve1: "Rød",
        Farve2: "Grøn",
        Farve3: "Blå"
    });
});

app.get('/api/route2', (req, res) => {
    res.json({
        Tal1: "5",
        Tal2: "10",
        Tal3: "15",
        Tal4: "20"
    });
});


app.use(express.static('public'));

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('App is listening on http://localhost:3000');
});