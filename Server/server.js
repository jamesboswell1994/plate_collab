const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const fs = require('fs')
const PORT = 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.use('/build', express.static(path.join(__dirname, '../build')));
app.use('/client', express.static(path.join(__dirname, '../client')));

app.get('/feed', (req,res) =>{
    res.redirect(200,'/')
})
app.get('/' , (req, res) =>{
    console.log("reached the root path")
    res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
    // res.status(200).send('hello')
})


// add error handling




app.listen(PORT , () =>{
    console.log("Server listening on port: " , PORT)
})

module.exports = app