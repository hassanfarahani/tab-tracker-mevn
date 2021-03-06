const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const config = require('./config/config')
const path = require('path')
// const seed = require('../seed')

const app = express()
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
require('dotenv').config()

const dbURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.6t15s.mongodb.net/Cluster0?retryWrites=true&w=majority`
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to MongoDB ...')
    // seed()
})
.catch(err => console.log(err))

require('./passport')

require('./routes')(app)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
    })
}

// const PORT = process.env.PORT || 8081
app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`)
})