'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Round2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Round2.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    student_id: {
      allowNull: false,
      references: { model: "student_applications", key: "id" },
      type: DataTypes.INTEGER
    },
    is_passed: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    rel_qualification: {
      allowNull: false,
      type: DataTypes.STRING
    },
    area_of_interest: {
      allowNull: false,
      type: DataTypes.ENUM ('Dev', 'QA/test', 'BA', 'Internship'),
    },
    answering: {
      allowNull: false,
      type: DataTypes.ENUM ('Good', 'Excellent', 'Moderate', 'Poor'),
    },
    introduction: {
      allowNull: false,
      type: DataTypes.ENUM ('Good', 'Excellent', 'Moderate', 'Poor'),
    },
    logic: {
      allowNull: false,
      type: DataTypes.ENUM ('Good', 'Excellent', 'Moderate', 'Poor'),
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
    modelName: 'Round2',
    tableName: "round2",
    deletedAt: "deleted_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
    paranoid: true, //use for soft delete with using deleted_at
    underscored: true //making underscored colomn as deletedAt to deleted_at
  });
  return Round2;
};