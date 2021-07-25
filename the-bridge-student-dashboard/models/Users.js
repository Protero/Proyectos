const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

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

UsersSchema.pre("save", async function (next) {
    const hash = await bcrypt.hash(this.password,10);
    this.password = hash;
    next();
});

const UserModel = mongoose.model("Users", UsersSchema);

module.exports = UserModel;
