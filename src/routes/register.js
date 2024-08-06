const express = require("express");
const router = express.Router();
const signUpValidator = require('../middleware/SignUpValidator');
const registerController = require("../app/controllers/registerController");

router.post("/validate", signUpValidator.validateForm, registerController.validate);

module.exports = router;
