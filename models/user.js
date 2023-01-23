'use strict';

const { handlePassword } = require('../utils')

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active',
        },
        rol: {
            type: DataTypes.ENUM('admin', 'user'),
            defaultValue: 'user',
        },
        photoURL: {
            allowNull: true,
            type: DataTypes.STRING,
        }
    }, {
        timestamps: false,
    })

    User.associate = function (models) {
        // One User can make Many Posts
        models.User.hasMany(models.Post)

        // Many Users can make Many Comments
        models.User.belongsToMany(models.Post, {
            through: 'Comments',
            as: 'comments',
        })

        // Many Users can follow Many Users
        models.User.belongsToMany(models.User, {
            through: 'Follows',
            as: 'followers',
            foreignKey: 'followingId',
            otherKey: 'followerId'
        })

        // Many Users can like Many Posts
        models.User.belongsToMany(models.Post, {
            through: 'LikesPosts',
            as: 'likes',
            foreignKey: 'userId',
            otherKey: 'postId'
        })

        // Many Users can reply Many Comments
        models.User.belongsToMany(models.Comment, {
            through: 'Replies',
            as: 'replies',
            foreignKey: 'userId',
            otherKey: 'commentId'
        })

        //One user have an avatar
        models.User.belongsTo(models.Storage, {
            foreignKey: 'photoURL',
        })
    }
    return User;
};