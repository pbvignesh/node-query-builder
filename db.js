require('dotenv').config();

const mysql = require('mysql2/promise');

async function connectDB() {
    try {
        const configuration = {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        };

        const connection = await mysql.createConnection(configuration);
        console.log('Connected to the Database');

        return connection;
    } catch (err) {
        console.error('Error connecting to Database: ', err.message);
    }
}

module.exports = connectDB;