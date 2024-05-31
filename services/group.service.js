const GroupModel = require('../model/group.model')

class GroupService{
    static async createGroup(groupName, groupInfo){
        try {
            const createGroup = new GroupModel({groupName, groupInfo});
            return await createGroup.save();
        } catch(err) {
            throw err;
        }
    }
}

module.exports = GroupService;