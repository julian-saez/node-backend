const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema(
    {
        email: {
            type: String,
        },
        password: {
            type: String
        }
    }, 
    {
        timestamps: true,
        versionKey: false
    }
);


module.exports = mongoose.model('users', UserScheme)