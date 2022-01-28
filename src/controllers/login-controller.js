const Service = require('../services/user-service');
const service = new Service();

class LoginController {

    async login(req, res) {
        try{
            const stored = await service.login(req.body)
            res.status(200).json(stored);
        }catch (e){
            res.status(e.status).json(e);
        }
    };

    async create(req, res) {
        try{
            const stored = await service.create(req.body)
            res.status(201).json(stored);
        }catch(e){
            res.status(e.status).json(e);
        }
    };
}
module.exports = LoginController;