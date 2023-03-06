'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PostImage extends Model {
    static associate(models) {
      this.belongsTo(models.Post, { foreignKey: 'post_id', onDelete: 'cascade' });
    }
  }

  PostImage.init(
    {
      post_image_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      src: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'PostImage',
      timestamps: true,
    }
  );

  return PostImage;
};
