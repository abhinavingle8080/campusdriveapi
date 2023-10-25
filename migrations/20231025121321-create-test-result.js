"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("test_results", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      contact: {
        type: Sequelize.STRING,
      },
      q1: {
        type: Sequelize.STRING,
      },
      q2: {
        type: Sequelize.STRING,
      },
      q3: {
        type: Sequelize.STRING,
      },
      q4: {
        type: Sequelize.STRING,
      },
      q5: {
        type: Sequelize.STRING,
      },
      q6: {
        type: Sequelize.STRING,
      },
      q7: {
        type: Sequelize.STRING,
      },
      q8: {
        type: Sequelize.STRING,
      },
      q9: {
        type: Sequelize.STRING,
      },
      q10: {
        type: Sequelize.STRING,
      },
      time: {
        type: Sequelize.INTEGER,
      },
      result: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("test_results");
  },
};
