import {createConnection, createPool} from 'mysql2';

<<<<<<< HEAD
const config = createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '7294',
    database: 'inventario',
    port: 3306
=======
// Create a pool to avoid the overhead of creating a new connection every time one is needed


const config = createPool({
    host: 'mariadb', // localhost en cada PC
    user: 'cswni',
    password: 'cswni',
    database: 'api_ventas',
    port: 3306,
    keepAliveInitialDelay: 300000,
    enableKeepAlive: true,
>>>>>>> c4cc907c53d167777d8d77eba8fe2f1b5194f81f
})

// Validate the connection

config.getConnection((err, connection) => {
    if (err) {
        console.error('ERROR: ', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('La conexión a la base de datos fue cerrada.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('La base de datos tiene muchas conexiones.');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('La conexión a la base de datos fue rechazada.');
        }
    }
    if (connection) {
        connection.release();
    }
    return;
})


export default config;
