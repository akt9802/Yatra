const driverModel = require('../models/driver.model.js');
const driverService = require('../services/driver.service.js')
const { validationResult} = require('express-validator')

module.exports.registerDriver = async(req,res,next) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({
            error: error.array()
        });
    }
    const {fullname, email, password, vehicle} = req.body;

    const isDriverAllreadyExist = await driverModel.findOne({email});
    if(isDriverAllreadyExist){
       return res.status(400).json({
        message: 'Driver allready exist'
       })
    }

    const hashedPassword = await driverModel.hashPassword(password);

    const driver = await driverService.createDriver({
        firstname : fullname.firstname,
        lastname : fullname.lastname,
        email,
        password : hashedPassword,
        color : vehicle.color,
        plate : vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });
    const token = driver.generateAuthToken();

    res.status(200).json({token, driver});

}