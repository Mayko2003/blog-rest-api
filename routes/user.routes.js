const express = require("express");
const UserController = require('../controllers/user.controller')

const router = express.Router();

router.get('/', UserController.getUsers)
router.get('/:username', UserController.getUser)
router.post('/', UserController.createUser)
router.put('/:username', UserController.updateUser)
router.delete('/:username', UserController.deleteUser)
router.put('/restore/:username', UserController.restoreUser)

module.exports = router;