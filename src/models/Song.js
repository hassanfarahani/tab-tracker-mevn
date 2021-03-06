const { Schema, model } = require('mongoose')

const SongSchema = new Schema({
    title: String,
    artist: String,
    genre: String,
    album: String,
    albumImageUrl: String,
    youtubeId: String,
    lyrics: String,
    tab: String
}, { timestamps: true })

const Song = model('song', SongSchema)

module.exports = Song