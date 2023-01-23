const { validationResult } = require("express-validator")

/**
 * Validate the body and continue with the next middleware or route handler if validation passes. 
 * Otherwise, send a 400 response with the error messages from the validation result.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const handleValidator = (req, res, next) => {

    try {
        validationResult(req).throw()
        next()
    } catch (error) {
        res.status(400).json({ error: error.array() })
    }

}

module.exports = handleValidator