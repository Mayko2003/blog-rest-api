// Load environment

if(process.env.NODE_ENV === 'production') require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}` });
else require('dotenv').config();

//import libraries
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const sequelize = require('./config/database');

//initialize express app
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());

//routes
app.use('/api', require('./routes'))

const port = process.env.PORT || 3000;


//server
async function main() {
    try {
        await sequelize.authenticate();
        console.log('Database connected');

        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

main();
