'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentApplication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StudentApplication.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email_id: {
      allowNull: false,
      type: DataTypes.STRING
    },
    wa_no: {
      allowNull: false,
      type: DataTypes.STRING
    },
    date_of_birth: {
      allowNull: false,
      type: DataTypes.DATE
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING
    },
    diploma_branch: {
      allowNull: false,
      type: DataTypes.STRING
    },
    degree_branch: {
      allowNull: false,
      type: DataTypes.STRING
    },
    ssc_percentage: {
      allowNull: false,
      type: DataTypes.DECIMAL
    },
    diploma_percentage: {
      allowNull: false,
      type: DataTypes.DECIMAL
    },
    diploma_appearing:{
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    be_percentage: {
      allowNull: false,
      type: DataTypes.DECIMAL
    },
    be_appearing: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    be_passing_year: {
      allowNull: false,
      type: DataTypes.STRING
    },
    subject_backlog: {
      allowNull: false,
      type: DataTypes.STRING
    },
    college: {
      allowNull: false,
      type: DataTypes.STRING
    },
    company_applied: {
      allowNull: false,
      type: DataTypes.STRING
    },
    area_of_interest: {
      allowNull: false,
      type: DataTypes.STRING
    },
    other_qualification: {
      allowNull: false,
      type: DataTypes.STRING
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE
    },
    deleted_at: {
      allowNull: true,
      type: DataTypes.DATE
    },
    updated_at: {
      allowNull: true,
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'StudentApplication',
    tableName: "student_applications",
    deletedAt: "deleted_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
    paranoid: true, //use for soft delete with using deleted_at
    underscored: true //making underscored colomn as deletedAt to deleted_at
  });
  return StudentApplication;
};