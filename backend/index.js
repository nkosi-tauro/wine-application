require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const mongoUri = `mongodb+srv://nkosi-tauro:${process.env.DB_PASS}@vuejwtauth.mpdvx.mongodb.net/wineapp?retryWrites=true&w=majority`
const app = express()
const routes = require('./routes/routes')
const isDev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cors({
    origin: ['*','http://localhost:8081', process.env.PORT]
}))
app.use('/api', routes)

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

// Setup prod build
if (!isDev) {
    // Static folder
    app.use(express.static(__dirname + '/public'));
    // SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

app.listen(port, () =>{
    console.log( `Connected to port ${port} on ${process.env.NODE_ENV}`)
})