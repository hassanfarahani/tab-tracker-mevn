const { Schema, model } = require('mongoose')

const HistorySchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'user'},
    songId: { type: Schema.Types.ObjectId, ref: 'song'},
}, { timestamps: true })

const History = model('history', HistorySchema)

module.exports = History