const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection');

class User extends Model {
  // static associate({Post}) {
  //   this.hasMany(Post, {foreignKey: 'userId', as: 'posts'})
  // }
}

User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      user_avatar: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'user',
    }
  );
  
  module.exports = User;
  