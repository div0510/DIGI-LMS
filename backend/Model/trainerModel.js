const { Schema, model} = require('../connection.js');
const trainerSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
        // encrypted
    },
    passwordCopy: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 12,
    },
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    experience: {
        type: Number,
        required: false,
    },
    areaOfExpertise: {
        type: Array,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    avatar: {
        type: String, 
    }
})

module.exports = model('trainer', trainerSchema);