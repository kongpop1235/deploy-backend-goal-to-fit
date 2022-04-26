const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require('../modles/signupModles');
const bcrypt = require('bcrypt');


router.post('/login', (req, res) => {
    signUpTemplateCopy.findOne({ username: req.body.username })
        .then(data => {
            // res.send(data)
            // const pass = req.body.password;
            // const passcheck = data.password;
            bcrypt.compare(req.body.password, data.password, (err, result) => {
                // if (err) throw err;
                if (result === true) {
                    const loginFinish = {
                        check: true,
                        data: data
                    }
                    // res.send(check);
                    res.send(loginFinish);
                } else {
                    res.status(401).send("error 401");
                }
            })
        })
        .catch(error => {
            res.json(error);
        })
})


// router.put('/edit_profile', async (req, res) => {
// })


// router.get('/signin')
module.exports = router;