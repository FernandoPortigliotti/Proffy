const express = require('express')
const server = express()

server.use(express.static("assets"))
.get("/", (req, res) => {
    return res.sendFile(__dirname + "/views/index.html")
})
.get("/study", (req, res) => {
    return res.sendFile(__dirname + "/views/study.html")
})
.get("/giv-classes", (req, res) => {
    return res.sendFile(__dirname + "/views/giv-classes.html")
})

.listen(5500)