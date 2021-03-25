require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const mongoUri = `mongodb+srv://nkosi-tauro:${process.env.DB_PASS}@vuejwtauth.mpdvx.mongodb.net/wineapp?retryWrites=true&w=majority`

// mongoDB
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> {
    console.log("Connected to DB")
    },
    error => {
        console.log(`Failed to connect ${error}`)
    }
)
