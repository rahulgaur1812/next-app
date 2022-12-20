const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    userid: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: Number,
        unique: true,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
mongoose.models = {};
module.exports = mongoose.model('Users', UserSchema);