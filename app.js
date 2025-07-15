const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/demo.html")
})

app.listen(port, ()=>{
    console.log("Done che broo")
})