const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require('../modles/signupModles');
const bcrypt = require('bcrypt');


router.post('/', (req, res) => {
    signUpTemplateCopy.findOne({ username: req.body.username })
        .then(data => {
            bcrypt.compare(req.body.password, data.password, (err, result) => {
                if (result === true) {
                    const dataCheck = {
                        check: true,
                        data: {
                            walk: data.walk,
                            run: data.run,
                            bikking: data.bikking,
                            swimming: data.swimming,
                            pushups: data.pushups,
                            hulaHoop: data.hulaHoop,
                            boxing: data.box,
                            badminton: data.badminton,
                            yoga: data.yoga,
                            _id: data._id,
                            username: data.username,
                            phone: data.phone,
                            gender: data.gender,
                            birth: data.birth,
                            height: data.height,
                            weight: data.weight,
                            calories_gold: data.calories_gold,
                            date: data.date,
                            calories_goal: data.calories_goal,
                        }
                    };
                    res.send(dataCheck);
                } else {
                    res.status(401).send("error 401");
                }
            })
        })
        .catch(error => {
            res.json('error');
        })
})

module.exports = router;