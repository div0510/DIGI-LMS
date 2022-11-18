const {Schema , model } = ('../connection.js');
const userSchema = new Schema({
    userName: String, 
    name: String,
    phoneNo: String,
    email: String,
    address: String,
})

module.exports = model('users',userSchema);