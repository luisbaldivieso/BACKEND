const mongoose = require('../db');

const UsuarioSchema = new mongoose.Schema({
  correo: String,
  password: String,
  tipo_usuario: String,
  activo: Boolean,
  fecha_creacion: Date
}, { collection: 'usuarios' });

module.exports = mongoose.model('Usuario', UsuarioSchema);
