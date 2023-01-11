'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Comments', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT
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
            status: {
                type: Sequelize.ENUM('accepted', 'rejected'),
                defaultValue: 'accepted'
            },
            userId: {
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id',
                }
            },
            postId: {
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                    model: 'Posts',
                    key: 'id',
                }
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Comments');
    }
};