const uuid = require('uuid');
const RoleModel = require('../../models/role');
const RoleDto = require('../../src/dtos/usuario-dto');
const moment = require('moment');

const { ServerErrorException } = require('../exceptions/server-exception');
const { RoleErrorException } = require('../exceptions/role-exception');

class UserService {

    async create(role){
        try{
    
            role.id = uuid.v4().toUpperCase();
            role.createdby = 'sldakshdkajsd'
            role.created = moment();
    
            await RoleModel.create(role);
    
            role = await RoleModel.findByPk(role.id);
    
            let dto = await new RoleDto(role)
            return dto.obj;
        }catch(e){
            throw new ServerErrorException(500, e.errors);
        }
    }
    async findOne(id){
        try{
    
            const role = await RoleModel.findByPk(id);

            let dto = await new RoleDto(role)
            return dto.obj;
    
        }catch(e){
            throw new RoleErrorException(500, 'A permissão que você informou não existe no banco de dados.');
        }
    }
}
module.exports = UserService;