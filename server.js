const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');

// Use Thick mode by setting the libDir
oracledb.initOracleClient({ libDir: 'C:\\Users\\Sumaiya\\Downloads\\instantclient-basic-windows.x64-23.4.0.24.05\\instantclient_23_4' }); // Update this path to the actual path of your Oracle Instant Client

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/passenger', async (req, res) => {
    try {
        const connection = await oracledb.getConnection({
            user: 'HR',
            password: 'new_password',
            connectString: 'localhost/xe'
        });
        const result = await connection.execute('SELECT * FROM passenger');
        await connection.close();

        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
