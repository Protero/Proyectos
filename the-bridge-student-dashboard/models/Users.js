const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const debug = require('debug')('app');

const UsersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER",
      },
    name: {
        type: String,
        trim: true,
      },
    cursos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Courses" }],
});

UsersSchema.pre("save", async function (next) {
    const hash = await bcrypt.hash(this.password,10);
    this.password = hash;
    next();
});

UsersSchema.methods.verifyPassword = async function (password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
  };


const UserModel = mongoose.model("Users", UsersSchema);

module.exports = UserModel;
