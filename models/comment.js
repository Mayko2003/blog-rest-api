'use strict';
module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postId: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        userId: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        likes: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        timestamps: false
    });

    Comment.associate = function(models){

    }
    
    return Comment;
};