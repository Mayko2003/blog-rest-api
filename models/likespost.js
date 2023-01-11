'use strict';

module.exports = (sequelize, DataTypes) => {
    const LikesPost = sequelize.define('LikesPost', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        userId: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        postId: {
            type: DataTypes.BIGINT,
            allowNull: false
        }
    }, {
        timestamps: false,
    });

    LikesPost.associate = function(models){}
    return LikesPost;
};