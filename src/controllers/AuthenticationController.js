// const { users } = require('../models')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser(user) {
    const ONE_WEEK = 7 * 24 * 60 * 60
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register(req, res) {
        try {
            const newUser = await new User(req.body)
            const user = await newUser.save()
            if (!user) throw new Error('Something went wrong saving the new user!')
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch(err) {
            res.status(400).send({
                error: 'This email account is already in use.'
            })
        }
    },
    async login(req, res) {
        const {email, password} = req.body
        try {
            const user = await User.findOne({email: email})
            if (!user) {
                return res.status(403).send({
                    error: 'The email address was incorrect'
                })
            }

            const isPasswordValid = await user.comparePassword(password)
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'The password was incorrect'
                })
            }

            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch(err) {
            res.status(500).send({
                error: 'An error has occured trying to login'
            })
        }
    }
}