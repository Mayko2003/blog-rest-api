const User = require('../models')['User']

const UserController = {}

/**
 * Get all users
 * @param {*} req - request object
 * @param {*} res - response object
 */
UserController.getUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).json({
            status: 200,
            data: users
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error.message
        })
    }
}

/**
 * Get a user by username
 * @param {*} req - request object
 * @param {*} res - response object
 */
UserController.getUser = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                username: req.params.username
            }
        })
        res.status(200).json({
            status: 200,
            data: user
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error.message
        })
    }
}

/**
 * Create a user
 * @param {*} req - request object
 * @param {*} res - response object
 */
UserController.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json({
            status: 201,
            message: 'User created successfully',
            data: user
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error.message
        })
    }
}

/**
 * Update a user
 * @param {*} req - request object 
 * @param {*} res - response object
 */
UserController.updateUser = async (req, res) => {
    try {
        const user = await User.update(req.body, {
            where: {
                username: req.params.username
            }
        })
        res.status(200).json({
            status: 200,
            message: 'User updated successfully',
            data: user
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error.message
        })
    }
}

/**
 * Soft delete a user
 * @param {*} req - request object
 * @param {*} res - response object
 */
UserController.deleteUser = async (req, res) => {
    try {
        const user = await User.update({
            status: 'inactive'
        }, {
            where: {
                username: req.params.username
            }
        })
        res.status(200).json({
            status: 200,
            message: 'User deleted successfully',
            data: user
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error.message
        })
    }
}

/**
 * Activate a inactive user
 * @param {*} req - request object
 * @param {*} res - response object
 */
UserController.restoreUser = async (req, res) => {
    try {
        const user = await User.update({
            status: 'active'
        }, {
            where: {
                username: req.params.username
            }
        })
        res.status(200).json({
            status: 200,
            message: 'User activated successfully',
            data: user
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message
        })
    }
}

module.exports = UserController