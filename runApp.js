const oracledb = require('oracledb');

async function runApp() {
    let con;
    try {
        con = await oracledb.getConnection({
            user: "system",
            password: "2662",
            connectString: "127.0.0.1:1521/xe"
        });
        const result = await con.execute(
            `SELECT * FROM passenger`
        );
        console.log("Query executed successfully");
        console.log(result.rows); // Check the fetched rows
        console.log(result.rowsAffected); // Check the number of rows affected
        console.log(result.outBinds); // Check for any out binds
        
    } catch (err) {
        console.error(err);
    } finally {
        if (con) {
            try {
                await con.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
}
exports.runApp = runApp;
