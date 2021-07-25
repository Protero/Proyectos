const express = require("express");
const router = express.Router();
const passport = require("passport");
const debug = require('debug')('app');

router.get('/', (req,res,next)=>{
    res.send('Bienvenidos!!');
});

router.post(
    '/signup',
    passport.authenticate('signup', {session:false}),
    async(req,res,next)=>{
        res.json(
            {
                message: 'Signup succesful',
                user: req.user,
            }
        );
    }
);
router.post(
    '/login', 
    passport.authenticate('login', {session:false}),
    async function(req, res, next) {
        res.json(
            {
                message: 'login succesful',
                user: req.user,
            }
        );
    }
);

// router.post(
//     "/login",
//     async (req, res, next) => {
//       passport.authenticate("login", async (err, user, info) => {
//          console.log("> user/login: ", user);
//         try {
//           if (err || !user) {
//             const error = new Error("An error occurred.");
          
//             return next(error);
//           }
//           req.login(user, { session: false }, async (error) => {
//             if (error) return next(error);
          
//             const body = { _id: user._id, email: user.email };
//             // const token = jwt.sign({ user: body }, process.env.TOKEN_SECRET);
          
//             // return res.json({ token });
//             return res.json({ body });
//           });
//         } catch (error) {
//           return next(error);
//         }
//       })(req, res, next);
//     });



module.exports = router;