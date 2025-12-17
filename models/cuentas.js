const mongoose = require('../db');

const CuentaSchema = new mongoose.Schema({
  usuario_id: String,
  nombre_cliente: String,
  correo: String,
  telefono: String,
  direccion: String,
  numero_cuenta: String,
  tipo_cuenta: String,
  saldo: Number,
  tarjeta_estado: String,
  fecha_creacion: Date
}, { collection: 'cuentas' });

module.exports = mongoose.model('Cuenta', CuentaSchema);
