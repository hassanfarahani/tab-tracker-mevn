const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt'))

const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

UserSchema.pre('save', async function (next) {
    const user = this
    if (!user.isModified('password')) return next();
    try {
      const SALT_FACTOR = 8
      const salt = await bcrypt.genSalt(SALT_FACTOR);
      user.password = await bcrypt.hash(user.password, salt);
      return next();
    } catch (err) {
      return next(err);
    }
  });

const User = model('user', UserSchema)

User.prototype.comparePassword = function(password) {
    return bcrypt.compare(password, this.password)
}

module.exports = User