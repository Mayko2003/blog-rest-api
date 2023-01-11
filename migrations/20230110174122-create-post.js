'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Posts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false
            },
            content: {
                type: Sequelize.STRING(3000),
                allowNull: false
            },
            slug: {
                type: Sequelize.STRING,
                allowNull: false
            },
            front_image: {
                type: Sequelize.STRING,
                allowNull: true
            },
            likes: {
                type: Sequelize.BIGINT,
                allowNull: false,
                defaultValue: 0
            },
            status: {
                type: Sequelize.ENUM('published', 'draft'),
                defaultValue: 'draft'
            },
            userId: {
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id'
                }
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Posts');
    }
};