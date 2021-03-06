const Song = require('../models/Song')


module.exports = {
    async index(req, res) {
        try {
            let songs = null
            const search = new RegExp(req.query.search, 'i')

            if (search) {
                songs = await Song.find({$or: [
                    { "title": search},
                    { "artist": search},
                    { "album": search},
                    { "genre": search}
                ]})
            } else {
                songs = await Song.find({}).limit(10)
            }
            res.send(songs)
        } catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the songs'
            })
        }
    },
    async show(req, res) {
        try {
            const songs = await Song.findById(req.params.songId)
            res.send(songs)
        } catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the song'
            })
        }
    },
    async post(req, res) {
        try {
            const newSong = await new Song(req.body)
            const song = await newSong.save()
            res.send(song)
        } catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to create the song'
            })
        }
    },
    async put(req, res) {
        try {
            const { songId } = req.params
            const song = await Song.findByIdAndUpdate(songId, req.body)
            res.send(req.body)
        } catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to update the song'
            })
        }
    },
}
