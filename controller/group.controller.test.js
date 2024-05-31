const GroupService = require("../services/group.service");

describe('createGroup function', () => {
  it('should successfully create a group', async () => {
    // Mock request and response objects
    const req = { body: { groupName: 'Test Group', groupInfo: 'Test Group Info' } };
    const res = { json: jest.fn() };
    
    // Mock GroupService.createGroup method
    GroupService.createGroup = jest.fn().mockResolvedValue(true);
    
    // Call the createGroup function
    await exports.createGroup(req, res, null);
    
    // Check if the response is sent with the correct status and message
    expect(res.json).toHaveBeenCalledWith({ status: true, success: "Creating group is success" });
  });

  it('should throw an error if creating group fails', async () => {
    // Mock request and response objects
    const req = { body: { groupName: 'Test Group', groupInfo: 'Test Group Info' } };
    const res = { json: jest.fn() };
    
    // Mock GroupService.createGroup method to throw an error
    GroupService.createGroup = jest.fn().mockRejectedValue(new Error('Creating group failed'));
    
    // Call the createGroup function
    await expect(exports.createGroup(req, res, null)).rejects.toThrow('Creating group failed');
  });
});
