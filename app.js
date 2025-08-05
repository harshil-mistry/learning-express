const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Vadodara').
then(res=>{console.log("Connected successfully")})
.catch(err=>{console.log("Error occurred", err)})

const Cat = mongoose.model('Cat', {num1:Number, num2:Number})

const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.urlencoded()) 

app.set('views', __dirname+'/views')
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/home.html")
})

app.get('/marksheet', (req, res)=>{
    res.render("marksheet")
})

app.post('/calcmarksheet', (req, res)=>{
    m1 = req.body.m1
    m2 = req.body.m2
    sum = parseInt(m1) + parseInt(m2)
    res.render('result', {m1:m1, m2:m2, sum:sum})
})

app.get('/sum', (req, res) => {
    res.sendFile(__dirname + '/sum.html')
})

app.get('/ejs', (req, res)=>{
    res.render('home.ejs', {'name':'Harshil Mistry'})
})

app.get('/processsum', (req, res) => {
    num1 = req.query.num1
    num2 = req.query.num2
    const kitty = new Cat({num1:num1, num2:num2})
    kitty.save().then(()=>console.log("Saved bhai"))
    sum = parseInt(num1) + parseInt(num2)
    res.send(`The sum for ${num1} & ${num2} is : ${sum}`)
})

app.get('/api/nums', (req, res)=>{
    Cat.find().then(data=>{res.json(data)})
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