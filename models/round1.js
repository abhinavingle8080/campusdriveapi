'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Round1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  Round1.init({
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
    marks: {
      allowNull: false,
      type: DataTypes.DECIMAL
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
    modelName: 'Round1',
    tableName: "round1",
    deletedAt: "deleted_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
    paranoid: true, //use for soft delete with using deleted_at
    underscored: true //making underscored colomn as deletedAt to deleted_at
  });

  Round1.associate = function (models) {
    Round1.belongsTo(models.Round1, {
      sourceKey: 'id',
      foreignKey: 'student_id',
      constraints: false,
      as: 'StudentApplication'
    });
  }

  return Round1;
};