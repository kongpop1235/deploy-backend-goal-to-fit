const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require('../modles/signupModles');

router.post('/:_id', (req, res) => {
    signUpTemplateCopy.findOneAndDelete({_id: req.params._id})
    .then(data => {
        res.send(data);
    })
})

module.exports = router;