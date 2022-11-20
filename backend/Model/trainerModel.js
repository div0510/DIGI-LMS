const { Schema, model} = ('../connection.js');
const trainerModel = new Schema ({
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
        default: Date.now,
        required: true,
    },
    avatar: {
        type: String, 
    }
})