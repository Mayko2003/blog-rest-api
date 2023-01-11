'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Replies', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false
            },
            likes: {
                type: Sequelize.BIGINT,
                allowNull: false
            },
            content: {
                type: Sequelize.STRING,
                allowNull: false
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            commentId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Replies');
    }
};