const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require('../modles/signupModles');

router.post('/:_id', (req, res) => {
    signUpTemplateCopy.findOneAndUpdate({_id: req.params._id}, {username: "kongpop1235"})
    .then(data => {
        res.send(data);
    })
})

module.exports = router;