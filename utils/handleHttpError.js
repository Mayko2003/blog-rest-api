/**
 * Handle an http error and send a response
 * @param {*} res response object
 * @param {*} msg error message
 * @param {*} code status code
 */

const handleHttpError = (res, msg = 'Server Error', code = 500) => {
    res.status(code).json({
        status: code,
        error: msg
    })
}

module.exports = handleHttpError