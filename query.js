express = require('express')
app = express()
port = 3001

app.get('/', (req, res) => {
    res.send("Bruh")
})

app.get('/search', (req, res) => {
    query = req.query.query
    price = req.query.price
    res.send("Query is : " + query + "<br>Price is : " + price)
})

app.get('/search2/:id2/:id', (req, res) => {
    var id2 = req.params.id2
    var id = req.params.id
    res.send("Value is : "+id+" "+id2)
})

app.listen(port, ()=>{
    console.log("Thai gayu bhai chalu")
    console.log("http://localhost:3001")
})