const path = require("path");
const express = require("express");

const app = express();
const http = require('http');
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

io.on("connection", function(socket) {
    console.log("established connection")    
 });

server.listen(5000, () => console.log(`Backend listening on port 5000!`));