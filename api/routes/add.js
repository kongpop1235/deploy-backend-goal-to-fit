const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require('../modles/signupModles');

router.put('/', async (req, res) => {
    signUpTemplateCopy.findOne({username: req.body.username})
    .then(data => {
        res.send(data.activity);
    })
})

module.exports = router;