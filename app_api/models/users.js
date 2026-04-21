const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    hash: String,
    salt: String
});

userSchema.methods.setPassword = function (password) {
    this.salt = bcrypt.genSaltSync(10);
    this.hash = bcrypt.hashSync(password, this.salt);
};

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.hash);
};

userSchema.methods.generateJwt = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            name: this.name
        },
        'MY_SECRET',
        { expiresIn: '1h' }
    );
};

module.exports = mongoose.models.users || mongoose.model('users', userSchema);