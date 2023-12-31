//Import Dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Initialize Comment model (table) by extending off Sequelize's Model class
class Comment extends Model{};

// Set up fields and rules for Comments model
Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment_text: {
            type: DataTypes.STRING(5000),
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        user_id: {//Foreign Key
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        post_id: {//Foreign Key
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id'
            }
        },

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
)

module.exports= Comment;//Export Model