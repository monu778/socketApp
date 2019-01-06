const path=require('path');
const exp = require('express');
const socketIO= require('socket.io');
const http = require('http');
const publicPath = path.join(__dirname,'../public');

var app = exp();
var server = http.createServer(app);
var io=socketIO(server);
app.use(exp.static(publicPath));



io.on("connection",function(){
    console.log("new user connected");
})
io.on("disconnect",function() {
    console.log("user disconnected from user")
})
server.listen(3000,() => {
    console.log("server started in port 3000")
})



