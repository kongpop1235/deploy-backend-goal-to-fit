const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require('../modles/signupModles');
const bcrypt = require('bcrypt');


router.post('/', (req, res) => {
    signUpTemplateCopy.findOne({ username: req.body.username }, (err, result) => {
        if (err) {
            res.send(err);
        }
        if (result) {
            res.send(true);
        } else {
            res.send(false);
        }
    })
})

module.exports = router;