const { DataTypes } = require("sequelize");
const db = require("../../config/db");
const sequelize = db.sequelize;

const Product = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT('utf8mb4'),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    purchased: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    timestamps: false // Không sử dụng createdAt và updatedAt
  }
);

module.exports = Product;
