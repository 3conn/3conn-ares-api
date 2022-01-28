const RoleErrorException = class RoleErrorException {
    /**
     * Trata Erros do Servidor
     * @param {number} status 
     * @param {string} message 
     */
    constructor(status, message) {
        this.status = status || 500;
        this.message = message || 'Erro ao registrar permissão.';
        this.name = 'Erro no informar permissão.';
        this.stack = (new Error()).stack;
    }
}
module.exports = {
    RoleErrorException
}