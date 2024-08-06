const User = require('../models/User')
class UserController{
  async getUser(req, res) {
    try {
      const { uid } = req.body;
      if (!uid) {
        return res.status(400).json({ message: 'Thiếu ID người dùng' });
      }
      const user = await User.findOne({ where: { uid } });
      if (!user) {
        return res.status(404).json({ message: 'Không tìm thấy tài khoản' });
      }
      return res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      return res.status(500).json({ message: 'Không thể lấy thông tin tài khoản' });
    }
  }
}
module.exports = new UserController()