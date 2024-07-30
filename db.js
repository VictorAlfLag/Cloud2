// db.js
const knexLib = require('knex'); // llamar a la librería knex
const { Model } = require('objection'); // llamado al objeto
const knexConfig = require('./knexfile'); // Llamar a la configuración

// definir una variable
const knexInstance = knexLib(knexConfig.development); // iniciar objeto
Model.knex(knexInstance);  // configurar datos con objetos

module.exports = knexInstance; // exportar configuración

