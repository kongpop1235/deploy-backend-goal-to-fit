const express = require("express");
const router = express.Router();
const forFindCopy = require('../modles/forFind');

router.post('/', (req, res) => {
    forFindCopy.updateOne({ _id: req.body._id }, {
        $push: {
            walk: {
                title: "test runing 2",
                duration: 222,
                date: new Date("2015-03-25T12:00:00Z")
            }
        }
    })
        .then(data => {
            res.send(data);
        })
})

module.exports = router;

// ({ _id: req.body._id }, {
//     $push: {
//         walk: {
//             title: {
//                 type: String,
//                 default: "runing fastttt",
//             },
//             duration: {
//                 type: Number,
//                 default: "200",
//             },
//             date: {
//                 type: Date,
//                 default: Date.now
//             }
//         }
//     }
// })