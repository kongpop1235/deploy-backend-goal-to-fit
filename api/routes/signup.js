const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require('../modles/signupModles');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, saltPassword)

    const signedUpUser = new signUpTemplateCopy({
        username: req.body.username,
        password: securePassword,
        phone: req.body.phone,
        gender: req.body.gender,
        birth: req.body.birth,
        height: req.body.height,
        weight: req.body.weight,
        calories_gold: req.body.calories_gold
    })
    signedUpUser.save()
        .then(data => {
            res.json(true)
        })
        .catch(error => {
            res.json(error)
        })
})

module.exports = router;