const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    empid:{type:String ,required:true, unique:true},
    password:{type:String, required:true},
    role:{type:String}

});

module.exports = mongoose.model('User',userSchema);