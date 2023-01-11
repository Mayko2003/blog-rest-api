'use strict';
module.exports = (sequelize, DataTypes) => {
    const Follow = sequelize.define('Follow', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        followingId: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        followerId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        }
    }, {
        timestamps: false,
    });

    Follow.associate = function (models) {

    };

    return Follow;
};