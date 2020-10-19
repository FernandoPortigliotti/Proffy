function getSubjects(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length != 0
    if (data) {
        data.subject = getSubjects(data.subjects)

        proffys.push(data) 
        
        return res.redirect("/study")
    }
    
    return res.render("giv-classes.html", {subjects, weekdays})
}

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

nunjucks.configure('src/views',{
    express: server,
    noCashe: true,
})

server
.use(express.static("assets"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/giv-classes", pageGiveClasses)
.listen(5500)