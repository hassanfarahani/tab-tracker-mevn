const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const config = require('./config/config')
// const dbModels = require('./models')

const app = express()
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


const dbURI = 'mongodb+srv://admin:Newgalaxy@cluster0.6t15s.mongodb.net/Cluster0?retryWrites=true&w=majority'
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log('Connected to MongoDB ...'))
.catch(err => console.log(err))

// require('./routes')(app, dbModels)
require('./routes')(app)


const PORT = process.env.PORT || 8081
app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`)
})