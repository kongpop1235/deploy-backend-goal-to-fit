const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require('../modles/signupModles');

router.post('/:_id', async (req, res) => {
    signUpTemplateCopy.findOne({username: req.body.username}).then(data => {
        res.send(req.body);
    })
})

module.exports = router;