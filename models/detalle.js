const mongoose = require('../db');

const DetalleSchema = new mongoose.Schema({
  usuario_id: String,
  transaccion_id: String,
  mensaje: String,
  fecha: Date
}, { collection: 'detalle' });

module.exports = mongoose.model('Detalle', DetalleSchema);
