const passport = require('passport')
const User = require('./models/User')

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const config = require('./config/config')

passport.use(
    new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.authentication.jwtSecret
    }, async function(jwtPayload, done) {
        try {
            const user = await User.findOne({
                _id: jwtPayload._id
            })

            if (!user) {
                return done(new Error(), false)
            }
            return done(null, user)
        } catch (error) {
            return done(new Error(), false)
        }
    })
)


module.exports = null



// this file just setting up passport object that is why it returns null

// if someone makes a request that has the Bearer token in the authorization header, it will use that
//  so the strategy is gonna decode and verify that the token that comes in on this header is valid