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
        console.log("Conectando...")
        const pool = await sql.connect(dbSettings);
        return pool;
        
    } catch (error) {
        console.log("No se pudo establecer la conexión")
        console.error(error);
    }
}

//getConnection();

export {sql}