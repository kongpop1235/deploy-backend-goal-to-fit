const { ObjectID } = require("bson");
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const signUpTemplate = new mongoose.Schema({
    // _id: {
    //     type: ObjectID
    // },
    username: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    birth: {
        type: String,
        required: true,
    },
    height: {
        type: String,
        required: true,
    },
    weight: {
        type: String,
        required: true,
    },
    calories_gold: {
        type: Number,
        required: 0,
    },
    date: {
        type: Date,
        default: Date.now,
    }, //จะทำการบันทึกวันที่ที่ผู้ใช้งานลงทะเบียนโดยอัตโนมัติ
    calories_goal: {
        type: Number,
    },
    walk: [
        // {
        //     $push: {
        //         show: {
        //             type: Boolean,
        //             default: false,
        //             required: true,
        //         },
        //         title: {
        //             type: String,
        //         },
        //         duration: {
        //             type: Number,
        //             default: "0",
        //             required: true,
        //         },
        //         date: {
        //             type: Date,
        //         },
        //     }
        // },
    ],
    run: [],
    bikking: [],
    swimming: [],
    pushups: [],
    hulaHoop: [],
    boxing: [],
    badminton: [],
    yoga: [],
    weight: {
        show: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
        },
        duration: {
            type: Number,
            default: "0",
        },
        date: {
            type: Date,
        },
    },
});

module.exports = mongoose.model("users", signUpTemplate);
