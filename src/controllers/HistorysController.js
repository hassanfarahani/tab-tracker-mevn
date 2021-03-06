const History = require('../models/History')
const _ = require('lodash')

module.exports = {
    async index(req, res) {
        try {
            // const { userId } = req.query
            const userId = req.user._id
            const historys = await History
                .find({ userId })
                .populate('songId')
                .exec()

            res.status(200).send(_.uniqBy(historys, history => history.songId._id))
            // res.status(200).send(historys)
        } catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the history'
            })
        }
    },
    async post(req, res) {
        try {
            const userId = req.user._id
            // const { songId, userId } = req.body
            const { songId } = req.body
            const newHistory = await new History({ songId, userId })
            const history = await newHistory.save()
            res.status(200).send(history)
        } catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to create the history object'
            })
        }
    },
}
