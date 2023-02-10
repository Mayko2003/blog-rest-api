const { User } = require('../models')
const { handlePassword, handleHttpError } = require('../utils')
const { matchedData } = require('express-validator')
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
        handleHttpError(res, error.message, 500)
    }
}

/**
 * Get a user by username
 * @param {*} req - request object
 * @param {*} res - response object
 */
UserController.getUser = async (req, res) => {
    try {
        const field = req.query.field || 'displayName'
        if (field != 'displayName' && field != 'email') throw new Error('Invalid field')

        const value = req.query.value

        const user = await User.findOne({
            where: {
                [field]: value
            }
        })
        res.status(200).json({
            status: 200,
            data: user
        })
    } catch (error) {
        handleHttpError(res, error.message, 500)
    }
}

/**
 * Create a user
 * @param {*} req - request object
 * @param {*} res - response object
 */
UserController.createUser = async (req, res) => {
    try {
        

        const cleanBody = matchedData(req)
        const password = await handlePassword.hashPassword(req.body.password)
        cleanBody.password = password

        console.log(cleanBody)
        

        const user = await User.create(cleanBody)
        res.status(201).json({
            status: 201,
            message: 'User created successfully',
            data: user
        })
    } catch (error) {
        handleHttpError(res, error.message, 500)
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
        if (user[0] === 0) {
            handleHttpError(res, 'User not found', 404)
        } else {
            res.status(200).json({
                status: 200,
                message: 'User updated successfully',
            })
        }
    } catch (error) {
        handleHttpError(res, error.message, 500)
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
                username: req.params.username,
                status: 'active'
            }
        })
        if (user[0] === 0) {
            handleHttpError(res, 'User not found', 404)
        }
        else {
            res.status(200).json({
                status: 200,
                message: 'User deleted successfully',
            })
        }
    } catch (error) {
        handleHttpError(res, error.message, 500)
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
        if (user[0] === 0) {
            handleHttpError(res, 'User not found', 404)
        }
        else {
            res.status(200).json({
                status: 200,
                message: 'User activated successfully',
            })
        }
    } catch (error) {
        handleHttpError(res, error.message, 500)
    }
}

/**
 * Get all active users
 * @param {*} req - request object
 * @param {*} res - response object
 */
UserController.getActiveUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            where: {
                status: 'active'
            }
        })
        res.status(200).json({
            status: 200,
            data: users
        })
    } catch (error) {
        handleHttpError(res, error.message, 500)
    }
}

module.exports = UserController