const express = require('express')
const cors = require("cors")

const port = 4000

const server = express()
server.use(cors({
    origin: "*"
}))

server.get("/", (req, res)=>{
    res.send("<h2>Welcome to the Page of Node Js</h2><p>Go to main by giving /api/main in the url</p>")
})

server.get("/api/main", (req, res)=>{
    res.send(
        "<h1>What is Express?</h1> <li>Express.js is a small framework that works on top of Node.js web server functionality to simplify its APIs and add helpful new features.</li> <li>It makes it easier to organize your application’s functionality with middleware and routing.</li> <li>It adds helpful utilities to Node.js HTTP objects and facilitates the rendering of dynamic HTTP objects.</li>"
    )
})

server.get("*", (req, res) =>{
    res.send("<h2>Error 404: NOT FOUND</h2>")
})

server.listen(port, ()=>{
    try {
        console.log(`Server is listening on port ${port}`)
    } catch (error) {
        console.log(`On Starting server on port ${port} we get ${error}`)
    }
})