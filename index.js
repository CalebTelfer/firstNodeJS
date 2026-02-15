const http = require('http');
const fs = require('fs');

const express = require('express');
const app = express();
const PORT = 8080;


app.get("/", (req, res) => res.sendFile(__dirname + "/pages/index.html"));
app.get("/about", (req, res) => res.sendFile(__dirname + "/pages/about.html"));
app.get("/contact-me", (req, res) => res.sendFile(__dirname + "/pages/contact-me.html"));

app.use((req, res) => {
    res.status(404).sendFile(__dirname + "/pages/404.html");
})

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`My first Express app - listening on port ${PORT}!`);
}
)