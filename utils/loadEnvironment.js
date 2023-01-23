/**
 *  Load environment variables depending on the NODE_ENV
 *  @returns {void} 
 */
const loadEnvironment = () => {
    if (process.env.NODE_ENV === 'production') require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}` });
    else if (process.env.NODE_ENV === 'test') require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}` });
    else require('dotenv').config();
}

module.exports = loadEnvironment;