'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      this.hasMany(models.PostImage, { foreignKey: 'post_id' });
      this.hasMany(models.VideoLink, { foreignKey: 'post_id' });
      this.hasMany(models.GalleryImage, { foreignKey: 'post_id' });
      this.belongsTo(models.User, { foreignKey: 'user_id', onDelete: 'cascade' });
    }
  }

  Post.init(
    {
      post_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Post',
      timestamps: true,
    }
  );

  return Post;
};
