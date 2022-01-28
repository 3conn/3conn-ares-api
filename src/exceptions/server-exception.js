const ServerErrorException = class ServerErrorException {
    /**
     * Trata Erros do Servidor
     * @param {number} status 
     * @param {string} message 
     */
    constructor(status, message) {
        this.status = status || 500;
        this.message = message || 'Erro interno na aplicação. Entre em contato com o desenvolvedor.';
        this.name = 'Erro no servidor da api.';
        this.stack = (new Error()).stack;
    }
}
module.exports = {
    ServerErrorException
}