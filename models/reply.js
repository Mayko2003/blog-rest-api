'use strict';
module.exports = (sequelize, DataTypes) => {
    const Reply = sequelize.define('Reply', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        content: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        likes: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        date: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        userId: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        commentId: {
            type: DataTypes.BIGINT,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    Reply.associate = function(models){}
    return Reply;
};