module.exports = class RoleDto {
    constructor(obj) {
            this.obj = obj || {}, 
            this.description = obj.description,
            this.class = obj.class,
            this.type = obj.type,
            this.createdby = obj.createdby,
            this.updatedby = obj.updatedby,
            this.created = obj.created,
            this.updated = obj.updated
    }
}