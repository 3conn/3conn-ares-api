const {Model, DataTypes} = require('sequelize');

class User extends Model {

  static init(connection){
    super.init({
      name: DataTypes.STRING,
      registry: DataTypes.STRING,
      email: DataTypes.STRING,
      role_id: DataTypes.STRING,
      partner_id: DataTypes.STRING,
      division_id: DataTypes.STRING,
      password: DataTypes.STRING,
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
      modelName: 'User',
    })
  }
};
module.exports = User;