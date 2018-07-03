'use strict';
module.exports = (sequelize, DataTypes) => {
  var Blog = sequelize.define('Blog', {
    title: { type: DataTypes.STRING, allowNull: true },
    authorId: { type: DataTypes.INTEGER, allowNull: true },
    title: { type: DataTypes.STRING, allowNull: false },
    article: { type: DataTypes.TEXT, allowNull: false },
    featured: { type: DataTypes.BOOLEAN, allowNull: false },
    published: { type: DataTypes.DATE, allowNull: true }
  }, {});
  Blog.associate = function(models) {
    models.Blog.belongsTo(models.Author, {foreignKey: 'authorId'});
  };
  return Blog;
};