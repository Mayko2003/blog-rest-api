// Load environment
const { loadEnvironment } = require('./utils')
loadEnvironment();

//import libraries
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const db = require('./models');

//initialize express app
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(express.static(process.env.STATIC_FOLDER))

//routes
app.use('/api', require('./routes'))

const port = process.env.PORT || 3000;


//server
async function main() {
    try {
        await db.sequelize.authenticate();
        console.log('Database connected');

        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

main();
