const User = require('../models/User')

class PaymentController {
  async payment(req, res) {
    const { uid, money } = req.body
    if (!uid || !money) {
      return res.json({ error_code: 4, message: "Tham số không hợp lệ" })
    }
    try {
      const user = await User.findOne({ where: { uid: uid } });
      if (!user) {
        return res.json({ "error_code": 1, "message": 'Không tìm thấy người dùng' });
      }
      await user.increment('money', { by: money });
      res.json({ "error_code": 0, "message": 'Nạp tiền thành công' })
    } catch (error) {
      res.json({ "error_code": 1, "message": error.message })
    }
  }
}

module.exports = new PaymentController();
