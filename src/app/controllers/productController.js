const Product = require('../models/Product')
const User = require('../models/User')
const Order = require('../models/Order')
const axios = require('axios')

class ProductController {


  async getAllProducts(req, res) {
    try {
      const products = await Product.findAll();
      if (!products.length) {
        return res.status(404).json({ message: 'Không có sản phẩm nào' });
      }
      return res.status(200).json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      return res.status(500).json({ message: 'Không thể lấy sản phẩm' });
    }
  }
  async purchase(req, res) {
    const transaction = await sequelize.transaction(); // Start a new transaction
    try {
      const { productID, uid } = req.body
      if (!productID || !uid) {
        return res.json({ error_code: 4, message: "Tham số không hợp lệ" })
      }
      const [item, user] = await Promise.all([
        Product.findByPk(productID),
        User.findByPk(uid)
      ]);
      //----------------------------------------
      // check whether either item or user is valid or not 
      if (!item) {
        return res.json({ error_code: 100, message: "Sản phẩm không hợp lệ" });
      }
      if (!user) {
        return res.json({ error_code: 300, message: "Người dùng không hợp lệ" });
      }
      //-----------------------------------------
      // const money = item.money
      const productType = item.type
      const price = item.price
      const userMoney = user.money
      if (userMoney < price) {
        return res.json({ error_code: 300, message: "Không đủ tiền" });
      } else {
        const order = await Order.findOne({
          where: {
            uid
          }
        })
        await order.increment('days', { by: item.type })
        await user.decrement('money', { by: price })
        return res.json({ error_code: 200, message: "Mua thành công" })
      }
    } catch (error) {
      await transaction.rollback();
      return res.json({ error_code: 1, message: error.message || error })
    }
  }
}

module.exports = new ProductController();
