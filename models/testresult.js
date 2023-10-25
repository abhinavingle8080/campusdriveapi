'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TestResult extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TestResult.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact:{
      type: DataTypes.STRING,
      allowNull: false
    },
    q1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    q2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    q3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    q4: {
      type: DataTypes.STRING,
      allowNull: false
    },
    q5: {
      type: DataTypes.STRING,
      allowNull: false
    },
    q6: {
      type: DataTypes.STRING,
      allowNull: false
    },
    q7: {
      type: DataTypes.STRING,
      allowNull: false
    },
    q8: {
      type: DataTypes.STRING,
      allowNull: false
    },
    q9: {
      type: DataTypes.STRING,
      allowNull: false
    },
    q10: {
      type: DataTypes.STRING,
      allowNull: false
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    result:{
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'TestResult',
    tableName: "test_results",
    paranoid: true, //use for soft delete with using deleted_at
    underscored: true //making underscored colomn as deletedAt to deleted_at
  });
  return TestResult;
};