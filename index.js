const connectDB = require('./db');

(async () => {
    try {
        const db = await connectDB();

        const [rows] = await db.execute('SELECT NOW()');

        console.log('Database time: ', rows[0]['NOW()']);

        await db.end();
    } catch (err) {
        console.error('Database error: ', err.message);
    }
})();