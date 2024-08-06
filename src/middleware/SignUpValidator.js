const { check, validationResult, body } = require("express-validator");

const validateForm = [
  check("name", "Hãy nhập tên").notEmpty(),
  check("username", "Vui lòng điền tên đăng nhập").notEmpty(),
  check("username", "Tên đăng nhập tối thiểu 4 kí tự").isLength({
    min: 4,
  }),
  check("password", "Vui lòng nhập mật khẩu").notEmpty(),
  check("password", "Mật khẩu tối thiểu 6 kí tự").isLength({
    min: 8,
  }),
  check(
    "password",
    "Mật khẩu phải bao gồm 1 chữ cái"
  ).matches(/^[\w.]+/),
  check("email", "Vui lòng nhập email").notEmpty(),
  check("email", "Email không đúng định dạng").isEmail(),
];

module.exports = {
  validateForm
};
