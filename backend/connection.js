const mongoose = require('mongoose');
const db = 'digi_lms';

const dbUrl = `mongodb+srv://div0510:1234div89@cluster0.vmtfv.mongodb.net/${db}?retryWrites=true&w=majority`

mongoose.connect(dbUrl)
.then((result) => {
    console.log('Database Connected');
}).catch((err) => {
    console.log('Database not Connected', err);
});

module.exports = mongoose;