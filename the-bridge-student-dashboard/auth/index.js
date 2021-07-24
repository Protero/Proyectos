const passpord = require ("passport");
const localStrategy = require("passport-local").Strategy;
const UserModel = require('../models/Users');

passpord.use("signup",
     new localStrategy(
        {
            usernameField : "email",
            passwordField: "password",
        }, async(email,password,done)=>{
        try {
            console.log('email',email);
            const user = await UserModel.create({email,password});
            return done(null,user);
        } catch (error) {
            done (error);
        }
    }
));