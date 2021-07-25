const passport = require ("passport");
const localStrategy = require("passport-local").Strategy;
const UserModel = require('../models/Users');
const debug = require('debug')('app');

passport.use(
    "signup",
    new localStrategy(
        {
            usernameField : "email",
            passwordField: "password",
        },
        async(email,password,done)=>{
            try {
                const user = await UserModel.create({email,password});
                return done(null,user);
            } catch (error) {
                done (error);
            }
        }
    )
);

passport.use(
    'login',
    new localStrategy(
        {
            usernameField : "email", 
            passwordField: "password",
        },
        (email, password, done) => {
            try {
                UserModel.findOne(
                    { email: email },
                    async  (err, user) => {
                        if (err) return done(err); 
                        if (!user) return done(null, false); 
                        const result = await user.verifyPassword(password);
                        if (!result) return done(null, false); 
                        return done(null, user);
                    }
                );
            } catch (error) {
                done (error);
            }
        }
    )
);

// passport.use("login", new localStrategy(
//     {
//         usernameField : "email", //req.body.email
//         passwordField: "password",
//     }, async(email,password,done)=>{
//         try {
//             //saco los usuarios por email
//             const user = await UserModel.findOne({email});
            
//             //si no exite un usuario devuelvo mensaje de error
//             if (!user) return (null, false, {message: "User not found"});
            
//             //ahora compara las password
//             const validate = await user.isValidPassword(password);
//             if(!validate) return (null, false, {message: "Wrong password"});
            
//             // Yo el .compare no lo llevaría en el método de schema, lo pondría aquí
//             // const compare = await bcrypt.compare(password, user.password);

//             return done(null, user, {message:"Logged in successfully"});

//         } catch (error) {
//             done(error);
//         }

//     }

// ));


