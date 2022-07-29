async function connect() {

    if(global.connection && global.connection.state !== 'disconnected') {
        return global.connection
    }

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection('mysql://macare86_angCrud:angularCrud@50.116.87.133:3306/macare86_angularCrud');
    console.log("Conectou no MySQL");
    global.connection = connection;
    return connection;
}

async function selectCustomers() {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM clientes;')
    return rows;
}

async function insertCustomer(customer) {
    const conn = await connect();
    const sql = 'INSERT INTO clientes(cli_nome, cli_idade, cli_uf) VALUES (?, ?, ?);';
    const values = [customer.nome, customer.idade, customer.uf];
    await conn.query(sql, values);
}

async function updateCustomer(id, customer) {
    const conn = await connect();
    const sql = 'UPDATE clientes SET cli_nome=?, cli_idade=?, cli_uf=? WHERE cli_id =?;';
    const values = [customer.nome, customer.idade, customer.uf, id];
    await conn.query(sql, values);
}

async function deleteCustomer(id) {
    const conn = await connect();
    const sql = "DELETE FROM clientes WHERE cli_id=?;";
    const values = [1];
    await conn.query(sql, values);
}

module.exports = {
    selectCustomers,
    insertCustomer,
    updateCustomer,
    deleteCustomer
}