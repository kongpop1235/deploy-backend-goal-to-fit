const express = require("express");
const router = express.Router();
const forFindCopy = require('../../modles/forFind');

router.post('/add-walk', (req, res) => {
    if (req.body._id) {
        forFindCopy.updateOne({ _id: req.body._id }, {
            $push: {
                walk: {
                    title: req.body.title,                    
                    duration: req.body.duration,
                    calories: req.body.calories,
                    date: new Date(req.body.date)//yyyy-mm-ddThh:mm:ssZ : 2020-03-20T12:12:12Z
                }
            }
        })
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                res.json(error);
            })
    } else {
        res.status(401).send('error 401');
    }
})

module.exports = router;