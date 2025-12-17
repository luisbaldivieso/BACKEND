const express = require('express');
const cors = require('cors');

const Usuario = require('../models/usuario');
const Cuenta = require('../models/cuenta');
const Transaccion = require('../models/transaccion');
const Detalle = require('../models/detalle');

const app = express();
app.use(cors());
app.use(express.json());

/* LOGIN */
app.post('/login', async (req, res) => {
  const { correo, password } = req.body;

  const usuario = await Usuario.findOne({ correo, password });

  if (!usuario) {
    return res.status(401).json({
      mensaje: 'Usuario o contraseña incorrectos'
    });
  }

  res.json({
    mensaje: 'Login correcto',
    usuario
  });
});

/* PRUEBA: listar cuentas */
app.get('/cuentas', async (req, res) => {
  const cuentas = await Cuenta.find();
  res.json(cuentas);
});

app.listen(3000, () => {
  console.log('🚀 Backend activo en http://localhost:3000');
});
