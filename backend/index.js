(async () => {
    const customer = {
        nome: 'Paulo Gramacho',
        idade: 26,
        uf: 'SP'
    }

    const db = require("./db");
    console.log("Começou!");


    // console.log('INSERT');
    // await db.insertCustomer(customer)

    console.log('SELECT')
    const clientes = await db.selectCustomers();
    console.log(clientes);

    // console.log('UPDATE');
    // await db.updateCustomer(1, customer);

    // console.log('DELETE');
    // await db.deleteCustomer(1);
})();
