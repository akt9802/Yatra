const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const driverSchema = new mongoose.Schema({
    fullname : {
        firstname : {
            type: String,
            required: true,
            minlength : [3, 'Firstname must be atleast 3 character long'],
        },
        lastname : {
            type : String,
            minlength : [3, 'Lastname must be atleast 3 character long']
        }
    },
    email : {
        type: String,
        required: true,
        unique : true,
        lowercase : true,
    },
    password : {
        type : String,
        required : true,
        selected : false
    },
    sockedId : {
        type : String,
    },
    status:{
        type: String,
        enum : ['active','inactive'],
        default: 'inactive'
    },
    vehicle: {
        color : {
            type : String,
            required: true,
            minlength: [3, 'Color must be at least 3 character long'],
        },
        plate:{
            type: String,
            required: true,
            minlength : [3,'Plate must be atleast 3 character long']
        },
        capacity:{
            type: Number,
            required: true,
            min: [1, "capactiy must be atleast 1"]
        },
        vehicleType:{
            type: String,
            required : true,
            enum : ['car','motorcycle','auto']
        }
    },

    location: {
        lat : {
            type: Number,
        },
        lng : {
            type: Number,
        }
    }
})


driverSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id},process.env.JWT_SECRET,{expiresIn:'24h'});
    return token;
}

driverSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

driverSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const driverModel = mongoose.model('driver',driverSchema);

module.exports = driverModel;