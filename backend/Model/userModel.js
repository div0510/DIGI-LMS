const {Schema , model } = ('../connection.js');
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
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
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
    avatar: {
        type: String, 
    },
    contact:{
        type: Number,
        required: true,
    },
    parentContact: {
        type: Number,
        required: true,
    }
})

export default model('users',userSchema);