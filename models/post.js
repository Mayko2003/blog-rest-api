'use strict';
module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.BIGINT
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING(3000),
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false
        },
        front_image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        likes: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 0
        },
        status: {
            type: DataTypes.ENUM('published', 'draft'),
            defaultValue: 'draft'
        },
        userId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        }
    }, {
        timestamps: false,
    });

    Post.associate = function (models) {

        models.Post.belongsTo(models.Storage, {
            foreignKey: 'front_image',
        })
    };
    return Post;
};