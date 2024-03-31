var express = require('express');
var router = express.Router();
const Controller = require('../bin/controllers/user.controllers.js');

router.get('/read', Controller.getAll);
router.post('/create',Controller.createUser);
router.post('/update/id',Controller.updateUser);
router.post('/delete/id',Controller.deleteUser); 

module.exports = router;
