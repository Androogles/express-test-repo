const express = require('express');
const app = express();

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

app.use(express.static('public'));

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('App is listening on http://localhost:3000');
});