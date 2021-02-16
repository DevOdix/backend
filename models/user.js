const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique : true},
    firstname : {type : String, required : true},
    lastname : {type : String, required : true},
    datenai : {type : Date, required : true },
    email: { type: String, required: true, unique: true },
    emailverif: { type : Boolean , default:false},
    password: { type: String, required: true, minlength: 8 },
    usertype: {type: String},
    roleadmin: { type : Boolean , default:false},
    image : { type : String}
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User",userSchema);