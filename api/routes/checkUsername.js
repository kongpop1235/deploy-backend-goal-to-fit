const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require('../modles/signupModles');
const bcrypt = require('bcrypt');


router.post('/', (req, res) => {
    signUpTemplateCopy.findOne({ username: req.body.username })
        .then(data => {
            if(data === ""){
                res.send($`""`);
            }
            if(data === null){
                res.send("null");
            }
            res.send(data);
        })
        .catch(error => {
            res.json('error');
        })
})

module.exports = router;