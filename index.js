import Express from "express";
import greetings from "./greetings.js";

const app = Express();
const port = 5000;

app.get("/", (req, res) => {
    res.send(
        '<h1>VenturX Express</h1>'
        );
})

app.get("/greetings/:name", (req, res) => {
    res.status(400).json({msg: `Hello, ${req.params.name}!`});
})

app.get("/greetings", (req, res) => {
    res.status(400).json({msg: "Try entering a name..."});
})

app.listen(port, () => console.log("Listening on port " + port))