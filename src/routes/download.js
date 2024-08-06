const express = require("express");
const router = express.Router();

const downloadController = require("../app/controllers/downloadController.js");

router.get("/", downloadController.download);


module.exports = router;
