import sql from 'mssql' 
import config from '../config'

const dbSettings = { 
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    databases: config.dbName,
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
        
    } catch (error) {
        console.error(error);
    }

    // const result = await sql.query('Select 1');
    // console.log(result);
}

//getConnection();

export {sql}