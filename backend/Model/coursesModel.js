const {Schema, model} = require('../connection.js');
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
        type: ObjectId,
        required: true,
    },
    category:{
        type: Array,
        required: true,
    }
})

export default model('course',courseModel);