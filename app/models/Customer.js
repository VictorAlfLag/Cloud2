const { format } = require('mysql2');
const { Model } = require('objection'); // llamar al modelo de librerías de objetos

class Customer extends Model { // creo herencia del modelo
    static get tableName() { // especifica el nombre de la tabla
        return 'customer'; // Asegúrate de que coincida con el nombre de la tabla en la base de datos
    }

    static get jsonSchema() { // especifica el nombre de la estructura
        return {
            type: 'object', // object para un dato array para una lista 
            required: ['name', 'email', 'phone', 'address', 'city', 'state', 'zip_code'], // Campos obligatorios

            properties: { // estructura de los campos
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1 },
                email: { type: 'string', format: 'email' },
                phone: { type: 'string', minLength: 1 }, // Campo adicional
                address: { type: 'string', minLength: 1 }, // Campo adicional
                city: { type: 'string', minLength: 1 }, // Campo adicional
                state: { type: 'string', minLength: 1 }, // Campo adicional
                zip_code: { type: 'string', minLength: 1 }, // Campo adicional
                created_at: { type: 'string', format: 'date-time' }, // Campo adicional
                // Puedes agregar otros campos según tus necesidades
            }
        };
    }

    static async getCustomers() { // método para listar clientes
        return await Customer.query(); // select * from customer
    }

    static async insert(data) { // método para insertar clientes
        return await Customer.query().insert(data); // insert into customer values ...
    }

    static async update(data, id) { // método para editar cliente
        return await Customer.query().patchAndFetchById(id, data); // update set data where id=0
    }

    static async delete(id) {
        return await Customer.query().deleteById(id); // delete from customer where id = 0
    }
}

module.exports = Customer;
