const User = require('./models/User')

const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    // const db = dbModels
    app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)

    app.get('/', async (req, res) => {
        try {
            const users = await User.find()
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    })
}