"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Car.hasMany(models.Order, {
        sourceKey: "id",
        foreignKey: "CarId",
      });
    }
  }
  Car.init(
    {
      name: DataTypes.STRING,
      category: {
        type: DataTypes.ENUM,
        values: ["small", "medium", "large"],
      },
      price: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
      start_rent_at: DataTypes.DATE,
      finish_rent_at: DataTypes.DATE,
      image: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: (car, options) => {
          car.status = false;
        },
      },
      sequelize,
      modelName: "Car",
    }
  );
  return Car;
};
