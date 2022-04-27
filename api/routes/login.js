const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require('../modles/signupModles');
const bcrypt = require('bcrypt');


router.post('/', (req, res) => {
    signUpTemplateCopy.findOne({ username: req.body.username })
        .then(data => {
            // res.send(data)
            // const pass = req.body.password;
            // const passcheck = data.password;
    bcrypt.compare(req.body.password, data.password, (err, result) => {
        // if (err) throw err;
        if (result === true) {

            const dataCheck = [
                { "activity": data.activity },
                { "_id": data._id},
                { "username": data.username},
                { "phone": data.phone}
            ];

            const loginFinish = {
                check: true,
                data: data
            }
            // res.send(check);
            res.send(dataCheck);
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