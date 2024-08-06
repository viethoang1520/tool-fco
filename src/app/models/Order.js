const { DataTypes } = require("sequelize");
const db = require("../../config/db");
const sequelize = db.sequelize;
const User = require('./User'); // Đảm bảo bạn đã định nghĩa model User

const Order = sequelize.define(
  "order",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    uid: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    days: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  },
  {
    timestamps: true, // Không sử dụng createdAt và updatedAt
  }
);

// Định nghĩa mối quan hệ với model User
Order.belongsTo(User, {
  foreignKey: 'uid',
  targetKey: 'uid',
  as: 'user'
});

module.exports = Order;
