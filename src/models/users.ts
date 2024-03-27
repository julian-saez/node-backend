const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator')

const UserScheme = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters'],
    }
});

UserScheme.pre('save', async function( next: any ) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserScheme.statics.login = async function(email: string, password: string) {
    const user = await this.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw Error('incorrect password');
    }
    throw Error('incorrect email');
  };


module.exports = mongoose.model('users', UserScheme)
