'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserImage extends Model {
    static associate(models) {
      this.belongsTo(models.MyInfo, { foreignKey: 'my_info_id', onDelete: 'cascade' });
    }
  }

  UserImage.init(
    {
      use_image_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      src: {
        type: DataTypes.STRING,
        allowNull: true,
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
      modelName: 'UserImage',
      timestamps: true,
    }
  );

  return UserImage;
};
