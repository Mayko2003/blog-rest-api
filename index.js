require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const sequelize = require('./config/database');


const app = express();

//middleware
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
