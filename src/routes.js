const User = require('./models/User')

const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const isAuthenticated = require('./policies/isAuthenticated')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const HistorysController = require('./controllers/HistorysController')

module.exports = (app) => {
    app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)

    app.post('/login', AuthenticationController.login)

    app.get('/songs', SongsController.index)

    app.get('/songs/:songId', SongsController.show)

    app.post('/songs', SongsController.post)

    app.put('/songs/:songId/edit', SongsController.put)

    app.get('/bookmarks', isAuthenticated, BookmarksController.index)

    app.post('/bookmarks', isAuthenticated, BookmarksController.post)

    app.delete('/bookmarks/:bookmarkId', isAuthenticated, BookmarksController.delete)

    app.get('/historys', isAuthenticated, HistorysController.index)

    app.post('/historys', isAuthenticated, HistorysController.post)
}