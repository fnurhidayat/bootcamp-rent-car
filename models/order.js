"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // define association here
      Order.belongsTo(models.Car);
      Order.belongsTo(models.User, {
        targetKey: "id",
        foreignKey: "UserId",
      });
    }
  }
  Order.init(
    {
      total_price: DataTypes.INTEGER,
      start_rent_at: DataTypes.DATE,
      finish_rent_at: DataTypes.DATE,
      status: DataTypes.BOOLEAN,
      slip: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
      CarId: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate: (order, options) => {
          order.code = new Date().toString();
        },
      },
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
