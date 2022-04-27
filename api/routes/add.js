const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require('../modles/signupModles');

router.post('/', (req, res) => {
    signUpTemplateCopy.findOne({ username: req.body.username})
    .then(data => {
        res.send(data);
    })
})

module.exports = router;