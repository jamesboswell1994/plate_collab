const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const fs = require('fs')
const dishReviewController = require('./controllers/reviewsController')
const userController = require('./controllers/userController')
const PORT = 3000

const app = express()


app.use(express.json())
app.use(express.urlencoded())

app.use('/build', express.static(path.join(__dirname, '../build')));
app.use('/client', express.static(path.join(__dirname, '../client')));

app.get('/feed', (req,res) =>{
    res.redirect(200,'/')
})

app.post('/feed', dishReviewController.addReview ,(req,res) =>{
    console.log("post got through")
    res.status(200).send()
})

app.get('/feed/records', dishReviewController.getReviews, (req,res) =>{
    console.log("reached the records fetch")
    res.status(200).send(res.locals.reviewsData).json()
})

app.delete('/feed/records', dishReviewController.deleteReview, (req,res) =>{
    console.log("delete successful")
    res.status(200).send("deletion successful")
})

app.post('/create', userController.addUser ,(req,res) =>{
    console.log("post to create through")
    res.status(200).send()
})


app.get('/' , (req, res) =>{
    res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
    // res.status(200).send('hello')
})


// add error handling


app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ error: err });
  });

app.listen(PORT , () =>{
    console.log("Server listening on port: " , PORT)
})

module.exports = app