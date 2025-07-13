const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    fullname:{
        firstname : {
            type: String,
            required: true,
            minlength:[3, 'First name must be atleast 3 character long'],
        },
        lastname: {
            type: String,
            minlength: [3,'Last name must be atleast 3 character long']
        }
    }, 
    email : {
        type : String,
        required : true,
        unique: true,
        minlength: [5, 'Email must be atleast 5 character long']
    },
    password : {
        type : String,
        required : true,
        select : false, // when we try to find user then by default this particular field will not go 
    },
    socketId : {
        type : String,
    }
});

// now lets add some methods like hash password/token etc etc

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id : this._id},process.env.JWT_SECRET,{expiresIn : '24h'});
    return token;
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.statics.hashPassword = async function(password){
    // console.log("Password to hash:", password);
    return await bcrypt.hash(password,5);
}

const userModel = mongoose.model('user',userSchema);
module.exports = userModel;