const router = require("express").Router();
const GroupController = require("../controller/group.controller");

router.post('/createGroup', GroupController.createGroup);

module.exports = router;