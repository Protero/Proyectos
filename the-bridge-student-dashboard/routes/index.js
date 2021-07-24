const express = require("express");
const router = express.Router();
const passport = require("passport");


router.get('/', (req,res,next)=>{
    res.send('Bienvenidos!!');
});

router.post(
    '/signup',
    passport.authenticate('signup', {session:false}),
        async(req,res,next)=>{
            res.json({
                message: 'Signup succesful',
                user: req.user,
            });
        }
    );

module.exports = router;