const User = require("../models/User");
const Order = require("../models/Order");
const bcrypt = require("bcrypt");

class LoginController {
  async validate(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username: username } });
      if (!user) {
        let wrongUsernameMsg = "Tên người dùng hoặc mật khẩu không đúng";
        return res.json({ "error_code": 1, "message": wrongUsernameMsg });
      }
      const valid = await bcrypt.compare(password, user.password_hash);
      if (valid) {
        const uid = user.uid
        const [order, created] = await Order.findOrCreate({
          where: {
            uid
          },
          defaults: {
            uid,
            days: 0,
          }
        })
        const now = new Date().toISOString(); // get the current time and convert to ISO 8601 string
        res.json({ "error_code": 0, user, loginTime: now, daysLeft: order.days });
      } else {
        let wrongPasswordMsg = "Mật khẩu không đúng";
        res.json({ "error_code": 2, "message": wrongPasswordMsg });
      }
    } catch (err) {
      res.json({ "error_code": 3, "message": err.message || err })
    }
  }
}

module.exports = new LoginController();
