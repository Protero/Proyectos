const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },

});

const UserModel = mongoose.model("Users", UsersSchema);

module.exports = UserModel;
