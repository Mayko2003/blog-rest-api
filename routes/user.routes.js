const express = require("express");
const { UserController } = require('../controllers')
const { UserValidator } = require('../validators')
const router = express.Router();

// get all users
router.get('/', UserController.getUsers)
// get an user (default search field is username)
router.get('/find', UserController.getUser)
// create user
router.post('/', UserValidator.createUser, UserController.createUser)
// update user
router.put('/:username', UserController.updateUser)
// delete user
router.delete('/:username', UserController.deleteUser)
// restore user
router.put('/restore/:username', UserController.restoreUser)
// get active users
router.get('/active', UserController.getActiveUsers)

module.exports = router;