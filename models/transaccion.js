const mongoose = require('../db');

const TransaccionSchema = new mongoose.Schema({
  cuenta_origen: String,
  cuenta_destino: String,
  monto: Number,
  fecha: Date,
  usuario_id: String
}, { collection: 'transaccion' });

module.exports = mongoose.model('Transaccion', TransaccionSchema);
