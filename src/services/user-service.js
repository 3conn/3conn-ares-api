const moment = require('moment');
const brcrypt = require('bcrypt');
const uuid = require('uuid');

const UserModel = require('../../models/user');
const UserDto = require('../../src/dtos/usuario-dto');

const RoleService = require('../services/role-service');
const roleService = new RoleService();

const { ServerErrorException } = require('../exceptions/server-exception');
const { UserErrorException } = require('../exceptions/user-exception');

class UserService {
    async create(user) {

        const passHashed = await brcrypt.hash(user.password, 10);

        user.id = uuid.v4().toUpperCase();
        user.expiresDate = moment().add(1, 'months');
        user.createdby = 'sldakshdkajsd'
        user.created = moment();
        user.password = passHashed;

        const role = await this._checkRole(user.role_id);
        user.role_id = role;

        try {
            await UserModel.create(user);
            const usuario = await UserModel.findByPk(user.id);

            let dto = await new UserDto(usuario)
            return dto.obj;

        } catch (e) {
            throw new ServerErrorException(500, e);
        }
    }
    async login(user) {

        const registry = user.login
        const password = user.password;

        //Rotina de verificações do usuário
        let usuario = await UserModel.findOne({
            where: {
                registry
            }
        });

        //Verifica se a senha é válida

        if (!usuario) {
            throw new UserErrorException(500, 'Usuários não existe/Senha está incorreto.')
        }

        if (!(await this._passworValid(password, usuario.password))) {
            throw new UserErrorException(500, 'Usuários/Senha está incorreto.')
        }
        //verifica se o usuario está ativo
        if (usuario.lockedDate) {
            throw new UserErrorException(500, 'Usuário está bloqueado para uso nesta plataforma. Verifique com o superior imediato.')
        }
        //verifica se o usuario não está expirado
        if (!(await this._isExpired(usuario.expiresDate))) {
            throw new UserErrorException(500, 'Seu cadastro expirou, portanto não poderá acessar esta plataforma. Verifique com o superior imediato.')
        }
        //Rotina de Verificações da Divisão correspondente

        //Rotina de verificações da Empresa Correspondente



        //Retorna a informação do usuário logado
        let dto = await new UserDto(usuario)
        return dto.obj;
    }
    /**
     * Função para conferir se o password é válido
     * Retorna true caso o password seja compatível
     * @param {string} passwordinfo - password que se deseja conferir
     * @param {string} passwordcheck -password retornado do banco de dados para conferir com o informado.
     * @returns 
     */
    async _passworValid(passwordinfo, passwordcheck) {
        return await brcrypt.compare(passwordinfo, passwordcheck);
    }

    async _isExpired(expiresDate) {
        return await moment().isBefore(expiresDate);;
    }
    async _checkRole(role_id) {
        const role = await roleService.findOne(role_id);
        return role.id;
    }
}
module.exports = UserService;