const bcrypt = require('bcrypt');

const handlePassword = {}

/**
 * Hash a password
 * @param {string} password the password to hash
 * @returns {string} the hashed password
 */
handlePassword.hashPassword = async (password) => {
    const hash = await bcrypt.hash(password, 10);
    return hash;
}


/**
 * Compare a password with a hash
 * @param {string} password the password to compare
 * @param {string} hash the hash to compare
 * @returns {boolean} true if the password matches the hash, false otherwise
 */
handlePassword.comparePassword = async (password, hash) => {
    const result = await bcrypt.compare(password, hash);
    return result;
}


module.exports = handlePassword;