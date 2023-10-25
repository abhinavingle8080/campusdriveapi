'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('round2', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      student_id: {
        type: Sequelize.INTEGER
      },
      is_passed: {
        type: Sequelize.BOOLEAN
      },
      rel_qualification: {
        type: Sequelize.STRING
      },
      area_of_interest: {
        type: Sequelize.STRING
      },
      answering: {
        type: Sequelize.STRING
      },
      introduction: {
        type: Sequelize.STRING
      },
      logic: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      deleted_at: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('round2');
  }
};