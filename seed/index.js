const User = require('../src/models/User')
const Song = require('../src/models/Song')
const Bookmark = require('../src/models/Bookmark')
const History = require('../src/models/History')

require('dotenv').config()
const fs = require('fs')
const mongoose = require('mongoose')

const dbURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.6t15s.mongodb.net/Cluster0?retryWrites=true&w=majority`
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log('connected to db for seeding the db'))


const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'))
const songs = JSON.parse(fs.readFileSync(`${__dirname}/songs.json`, 'utf-8'))
const bookmarks = JSON.parse(fs.readFileSync(`${__dirname}/bookmarks.json`, 'utf-8'))
const history = JSON.parse(fs.readFileSync(`${__dirname}/history.json`, 'utf-8'))

const importData = async () => {
    try {
        await User.create(users)
        await Song.create(songs)
        // await Bookmark.create(bookmarks)
        // await History.create(history)
        console.log('data successfullt imported into the db')
        process.exit()
    } catch(error) {
        console.log(error)
    }
}
const deleteData = async () => {
    try {
        // await User.deleteMany()
        // await Song.deleteMany()
        await Bookmark.deleteMany()
        await History.deleteMany()
        console.log('data successfully deleted from the db')
        process.exit()
    } catch(error) {
        console.log(error)
    }
}

if (process.argv[2] === '-i') {
    importData().then()
} else if (process.argv[2] === '-d') {
    deleteData().then()
}