const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require('../modles/signupModles');
const bcrypt = require('bcrypt');

router.put('/', async (req, res) => {
    signUpTemplateCopy.findOne({username: req.body.username}).activity.walk 
    .then(date => {
        res.send(data);
    })
})

module.exports = router;