const { Model, DataTypes } = require('sequelize');

class Role extends Model {

  static init(connection) {
    super.init({
      description: DataTypes.STRING,
      class: DataTypes.INTEGER,
      type: DataTypes.STRING,
      createdby: DataTypes.STRING,
      updatedby: DataTypes.STRING,
      created: DataTypes.DATE,
      updated: DataTypes.DATE
    }, {
      createdAt: 'created',
      updatedAt: 'updated',
      sequelize: connection,
      modelName: 'Role',
    })
  }
};
module.exports = Role;