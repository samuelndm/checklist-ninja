const { Model, DataTypes } = require('sequelize')

class Post extends Model {
  static init (sequelize) {
    super.init({
      texto: DataTypes.STRING,
      data: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = Post
