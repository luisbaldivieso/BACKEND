const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// 🔌 Conexión MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/banco-BV')
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error MongoDB:', err));

// 🔥 Ruta de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: 'Backend banco-BV funcionando 🚀' });
});

// 🔐 Login
app.post('/usuarios/login', async (req, res) => {
  const { correo, password } = req.body;

  const usuario = await mongoose.connection
    .collection('usuarios')
    .findOne({ correo, password });

  if (!usuario) {
    return res.status(401).json({ mensaje: 'Usuario o contraseña incorrectos' });
  }

  res.json({
    mensaje: 'Login correcto',
    usuario
  });
});

// 🚀 ARRANQUE DEL SERVIDOR (ESTO ES CLAVE)
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
