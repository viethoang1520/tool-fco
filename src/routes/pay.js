const express = require("express");
const router = express.Router();
const paymentController = require("../app/controllers/paymentController");

router.post("/", paymentController.payment);

module.exports = router;
