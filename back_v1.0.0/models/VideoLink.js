'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class VideoLink extends Model {
    static associate(models) {
      this.belongsTo(models.Post, { foreignKey: 'post_id', onDelete: 'cascade' });
    }
  }

  VideoLink.init(
    {
      video_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'VideoLink',
      timestamps: true,
    }
  );

  return VideoLink;
};
