const { Schema, model } = require('mongoose')

const BookmarkSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'user'},
    songId: { type: Schema.Types.ObjectId, ref: 'song'}
}, { timestamps: true })

const Bookmark = model('bookmark', BookmarkSchema)

module.exports = Bookmark