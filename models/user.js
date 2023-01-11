'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active',
        },
        rol: {
            type: DataTypes.ENUM('admin', 'user'),
            defaultValue: 'user',
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
    }
    return User;
};