const {Schema, model ,Types} = require('../connection.js');
const courseModel = new Schema({
    title:{
        type: String,
        required: true,
        unique: true,
    },
    description:{
        type: String,
        required: true,
    },
    enrolledStudent:{
        type: Array,
    },
    data: {
        type: Object,
    },
    price:{
        type: Number,
        required: true,
    },
    trainer: {
        type: Types.ObjectId,
        ref:'trainer',
        required: true,
    },
    category:{
        type: Array,
        required: true,

    }
})

module.exports =  model('course',courseModel);