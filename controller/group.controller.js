const GroupService = require("../services/group.service");

exports.createGroup = async(req, res, next) => {
    try{
        const {groupName, groupInfo} = req.body;

        const successRes = await GroupService.createGroup(groupName, groupInfo);

        res.json({status:true, success: "Creating group is success"});
    } catch(error) {
        throw error;
    }
}