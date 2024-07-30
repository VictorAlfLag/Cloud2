const { Model } = require('objection');

class Customer extends Model {
    static get tableName() {
        return 'customer'; // Asegúrate de que coincida con el nombre de la tabla en la base de datos
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nombre', 'correo_electronico', 'telefono', 'direccion', 'ciudad', 'provincia', 'codigo_postal'],

            properties: {
                id: { type: 'integer' },
                nombre: { type: 'string', minLength: 1 },
                correo_electronico: { type: 'string', format: 'email' },
                telefono: { type: 'string', minLength: 1 },
                direccion: { type: 'string', minLength: 1 },
                ciudad: { type: 'string', minLength: 1 },
                provincia: { type: 'string', minLength: 1 },
                codigo_postal: { type: 'string', minLength: 1 },
                creado_en: { type: 'string', format: 'date-time' },
                actualizado_en: { type: 'string', format: 'date-time' },
            }
        };
    }

    static async getCustomers() {
        return await Customer.query(); // select * from customer
    }

    static async insert(data) {
        return await Customer.query().insert(data); // insert into customer values ...
    }

    static async update(data, id) {
        return await Customer.query().patchAndFetchById(id, data); // update set data where id=0
    }

    static async delete(id) {
        return await Customer.query().deleteById(id); // delete from customer where id = 0
    }
}

module.exports = Customer;
