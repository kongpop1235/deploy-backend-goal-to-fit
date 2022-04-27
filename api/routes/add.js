const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require('../modles/signupModles');

router.post('/', async (req, res) => {
    signUpTemplateCopy.findOne({username: req.body.username})
    .save(data => {
        res.send(data.activity);
    })
})

module.exports = router;