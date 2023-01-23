'use strict';

module.exports = (sequelize, DataTypes) => {
    const Storage = sequelize.define('Storage', {
        id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.BIGINT
        },
        filename: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        freezaTableName: true
    })
    return Storage;
};