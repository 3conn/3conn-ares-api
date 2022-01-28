module.exports = class UsuarioDto {
    constructor(obj) {

            this.obj = obj || {}, 
            this.name = obj.name,
            this.registry = obj.registry,
            this.email = obj.email,
            this.role_id = obj.role_id,
            this.password = obj.password,
            this.address = obj.address,
            this.phone = obj.phone,
            this.expiresDate = obj.expiresDate,
            this.lockedDate = obj.lockedDate,
            this.createdby = obj.createdby,
            this.updatedby = obj.updatedby,
            this.created = obj.created,
            this.updated = obj.updated
    }
}