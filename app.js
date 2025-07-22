const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true })) 

app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/home.html")
})

app.get('/about', (req, res)=>{
    res.sendFile(__dirname+"/about.html")
})

app.get('/contact', (req, res)=>{
    res.sendFile(__dirname+"/contact.html")
})

app.get('/search', (req, res)=>{
    res.sendFile(__dirname+"/search.html")
})

app.post('/search', (req, res)=>{
    const query = req.body.query
    const price = req.body.price
    res.send("Query is : " + query + "<br>Price is : " + price)
})

// app.get('/*', (req, res)=>{
//     res.send("Galat rasta")
// })

app.listen(port, ()=>{
    console.log("Done che broo")
    console.log("http://localhost:3000")
})