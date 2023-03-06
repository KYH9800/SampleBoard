'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GalleryImage extends Model {
    static associate(models) {
      this.belongsTo(models.Post, { foreignKey: 'post_id', onDelete: 'cascade' });
    }
  }

  GalleryImage.init(
    {
      gallery_image_id: {
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
      modelName: 'GalleryImage',
      timestamps: true,
    }
  );

  return GalleryImage;
};
