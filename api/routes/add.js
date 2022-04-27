const express = require("express");
const router = express.Router();
const forFindCopy = require('../modles/forFind');

router.post('/:_id', (req, res) => {
    forFindCopy.findOneAndDelete({_id: req.params._id})
    .then(data => {
        res.send(data);
    })
})

module.exports = router;