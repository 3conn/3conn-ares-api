const Service = require('../services/role-service');
const service = new Service();

class RoleController {

    async create(req, res) {
        try{
            const stored = await service.create(req.body)
            res.status(201).json(stored);
        }catch(e){
            res.status(e.status).json(e);
        }
    };
}
module.exports = RoleController;