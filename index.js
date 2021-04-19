const express = require('express');
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send(
        '<h1>VenturX Express</h1>'
        );
})

app.get("/greetings/:name", (req, res) => {
    res.send(`Hello, ${req.params.name}!`);
})

app.get("/greetings", (req, res) => {
    res.send('Try entering a name...');
})

app.listen(port, () => console.log("Listening on port " + port))