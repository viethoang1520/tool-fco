const express = require("express");
const router = express.Router();
const userController = require("../app/controllers/userController");

router.post("/get-one", userController.getUser);

module.exports = router;