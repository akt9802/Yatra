const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const driverController = require("../controllers/driver.controller.js");
const authMiddleware = require('../middlewares/auth.middleware.js')

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be atleast 3 character long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 charcter long"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be atleast 3 character"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("plate must be atleast 3 character"),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("capacity must be atleast 1 member"),
    body("vehicle.vehicleType")
      .isIn(["car", "auto", "motorcycle"])
      .withMessage("Color must be atleast 3 character"),
  ],
  driverController.registerDriver
);

router.post("/login", [body("email").isEmail().withMessage("Invalid Email"),
    body('password').isLength({min: 6}).withMessage('Password must be 6 character long')
],
    driverController.loginDriver
);

router.get('/profile',authMiddleware.authDriver,driverController.getDriverProfile);

router.get('/logout',authMiddleware.authDriver,driverController.logoutDriver);

module.exports = router;
