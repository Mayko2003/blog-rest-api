const { check } = require('express-validator');
const { handleValidator } = require('../utils');

const UserValidator = {}


UserValidator.createUser = [
    check('displayName').not().isEmpty().withMessage('Display Name is required'),
    check('email').not().isEmpty().withMessage('Email is required'),
    check('email').isEmail().withMessage('Email is invalid'),
    check('password').not().isEmpty().withMessage('Password is required'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    check('password').isLength({ max: 20 }).withMessage('Password must be at most 20 characters long'),
    check('status').isEmpty().withMessage('Status is not allowed'),
    check('rol').isEmpty().withMessage('Rol is not allowed'),
    (req, res, next) => handleValidator(req, res, next)
]


module.exports = UserValidator;