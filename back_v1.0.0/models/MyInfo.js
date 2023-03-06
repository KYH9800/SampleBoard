'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MyInfo extends Model {
    static associate(models) {
      this.hasOne(models.UserImage, { foreignKey: 'my_info_id' });
      this.belongsTo(models.User, { foreignKey: 'user_id', onDelete: 'cascade' });
    }
  }

  MyInfo.init(
    {
      my_info_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phone_num: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
      },
    },
    {
      sequelize,
      modelName: 'MyInfo',
      timestamps: true,
    }
  );

  return MyInfo;
};
