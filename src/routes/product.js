const express = require("express");
const router = express.Router();
const productController = require("../app/controllers/productController");

router.post("/purchase", productController.purchase);
router.get("/get-all", productController.getAllProducts);

module.exports = router;
