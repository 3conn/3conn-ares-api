const { Model, DataTypes } = require('sequelize');

class Partner extends Model {

  static init(connection) {
    super.init({
      name: DataTypes.STRING,
      registry: DataTypes.STRING,
      email: DataTypes.STRING,
      representative: DataTypes.STRING,
      registryRepresentative: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      expiresDate: DataTypes.DATE,
      lockedDate: DataTypes.DATE,
      createdby: DataTypes.STRING,
      updatedby: DataTypes.STRING,
      created: DataTypes.DATE,
      updated: DataTypes.DATE
    }, {
      createdAt: 'created',
      updatedAt: 'updated',
      sequelize: connection,
      modelName: 'Partner',
    })
  }
};
module.exports = Partner;