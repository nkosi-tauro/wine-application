require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const mongoUri = `mongodb+srv://nkosi-tauro:${process.env.DB_PASS}@vuejwtauth.mpdvx.mongodb.net/wineapp?retryWrites=true&w=majority`
const app = express()
const routes = require('./routes/routes')
const port = process.env.PORT || 3000

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cors())
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


app.listen(port, () =>{
    console.log( `Connected to port ${port} `)
})