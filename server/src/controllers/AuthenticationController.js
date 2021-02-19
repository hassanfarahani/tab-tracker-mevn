// const { users } = require('../models')
const User = require('../models/User')

module.exports = {
    async register(req, res) {
        const newUser = await new User(req.body)
        try {
            const user = await newUser.save()
            if (!user) throw new Error('Something went wrong saving the bucketListItem')
            res.status(200).json(user)
        } catch(err) {
            res.status(400).send({
                error: 'This email account is already in use.'
            })
        }
    }
}