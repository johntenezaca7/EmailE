const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

//Creates a new collection called users
mongoose.model('users', userSchema);