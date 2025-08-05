const mongoose = require('mongoose')

var StudentSchema = mongoose.Schema({
    name: String,
    email: String,
    contact: Number
})

var StudentModel = mongoose.model('Student', StudentSchema)

module.exports = StudentModel