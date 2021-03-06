const Bookmark = require('../models/Bookmark')

module.exports = {
    async index(req, res) {
        try {
            const userId = req.user._id
            const {songId} = req.query
            let bookmarks
            if(!songId) {
                bookmarks = await Bookmark
                    .find({ userId })
                    .populate('songId')
                    .exec()
            } else {
                bookmarks = await Bookmark
                    .find({ songId, userId })
                    .populate('songId')
                    .exec()
            }
            res.status(200).send(bookmarks)
        } catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the bookmark'
            })
        }
    },
    async post(req, res) {
        try {
            const userId = req.user._id
            const { songId } = req.body
            const bookmarkAlreadyInDB = await Bookmark.findOne({ songId, userId })
            if (bookmarkAlreadyInDB) {
                res.status(400).send({
                    error: 'You already have this set as a bookmark'
                })
            }

            const newBookmark = await new Bookmark(req.body)
            const bookmark = await newBookmark.save()
            res.status(200).send(bookmark)
        } catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to create the bookmark'
            })
        }
    },
    async delete(req, res) {
        try {
            const userId = req.user._id
            const { bookmarkId } = req.params
            const bookmark = await Bookmark.findByIdAndDelete(bookmarkId)

            // if (!bookmark) {
            //     res.status(403).send({
            //         error: 'You do not have access to this bookmark'
            //     })
            // }

            // const bookmark = await Bookmark.findOne({
            //     _id: bookmarkId,
            //     userId
            // })
            res.status(200).send(bookmark)
        } catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to delete the bookmark'
            })
        }
    },
}
