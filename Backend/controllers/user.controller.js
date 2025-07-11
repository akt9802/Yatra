const userModel = require("../models/user.model.js");
const userService = require('../services/user.service.js')
const { validationResult } = require('express-validator')
module.exports.registerUser = async (req, res, next) => {
  // in this we have to write logic of registering user into the datbase
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;
  // this password -> lets hash it
  const hashedPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    fullname: {
      firstname: fullname.firstname,
      lastname: fullname.lastname,
    },
    email,
    password: hashedPassword,
  });

  // lets create a token when this user is generated
  // this generateAuthToken is called on user not whole userModel [ IMPORTANT ⭐]
  const token = user.generateAuthToken();
  res.status(201).json({token, user}); 
};

module.exports.loginUser = async (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }

    const { email, password } = req.body;
    const user = await userModel.findOne({email}).select('+password');
    // ye +password because in user you select this password false

    if(!user){
        return res.status(401).json({
            message : "Invalid email or password"
        })
    }

    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({
            message : "Invalid email and password",
        })
    }

    // if everything is correct we will generate token 
    const token = user.generateAuthToken();
    res.status(200).json({token,user});

}