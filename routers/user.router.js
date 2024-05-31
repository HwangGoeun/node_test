const router = require("express").Router();
const UserContoller = require("../controller/user.controller");

router.post('/registration', UserContoller.register);

module.exports = router;