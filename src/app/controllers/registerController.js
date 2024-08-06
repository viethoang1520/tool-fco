const User = require("../models/User");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

class RegisterController {
  async validate(req, res) {
    try {
      const checkExistUser = await User.findOne({
        where: {
          username: req.body.username,
        }
      });
      if (checkExistUser) {
        let msg = 'Tên người dùng đã tồn tại';
        return res.json({ "error_code": 1, "message": msg });
      }

      const errors = validationResult(req).array();

      if (errors.length === 0) {
        let { username, password, email, name } = req.body;
        let hashedPassword = (await bcrypt.hash(password, 10)).toString();
        const user = await User.create({
          username: username,
          password_hash: hashedPassword,
          email: email,
          full_name: name,
          status: 1
        });

        if (user) {
          return res.json({ "error_code": 0, "message": "Đăng ký người dùng thành công", user });
        } else {
          res.json({ "error_code": 1, "message": "Lỗi khi tạo người dùng" });
        }
      } else {
        res.json({ "error_code": 2, "message": errors });
      }
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = new RegisterController();
