'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('student_applications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      wa_no: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date_of_birth: {
        type: Sequelize.DATE,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true
      },
      diploma_branch: {
        type: Sequelize.STRING,
        allowNull: false
      },
      degree_branch: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ssc_percentage: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      diploma_percentage: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      diploma_appearing: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      be_percentage: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      be_appearing: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      be_passing_year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      subject_backlog: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      college: {
        type: Sequelize.STRING,
        allowNull: false
      },
      company_applied: {
        type: Sequelize.STRING,
        allowNull: false
      },
      area_of_interest: {
        type: Sequelize.STRING,
        allowNull: false
      },
      other_qualification: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('student_applications');
  }
};