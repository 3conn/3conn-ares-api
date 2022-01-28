const { Model, DataTypes } = require('sequelize');

class Contract extends Model {

  static init(connection) {
    super.init({
      payment: DataTypes.STRING,
      quota: DataTypes.INTEGER,
      partner_id: DataTypes.STRING,
      ps: DataTypes.STRING,
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
      modelName: 'Contract',
    })
  }
};
module.exports = Contract;