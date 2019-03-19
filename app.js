var express = require("express")
var http = require("http")
var app = express()
app.use(function(request, response){
    console.log("Server is successfully hosted as local")
    console.log("In comes a request to:" + request.url)
    response.end("Hello World in Express - Node.js")
})
http.createServer(app).listen(4000)
