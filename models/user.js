//Import Dependencies
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// Initialize User model (table) by extending off Sequelize's Model class
class User extends Model {
    checkPassword(loginPw) {//Function to check user Password by decrypting.
      return bcrypt.compareSync(loginPw, this.password);
    }
  }

  // Set up fields and rules for User model
  User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4]
        }
    }
}, {
    hooks: {
        async beforeCreate(newUserData) {//Encrypts Password before adding New record
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
        async beforeUpdate(updatedUserData) {//Encrypts Password before Updating record
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
})

module.exports = User;//Export Model