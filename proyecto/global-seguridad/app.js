const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const alumnosRoutes = require('./routes/alumnos');
const remedulesRoutes = require('./routes/remedules');
const alumnosBajaRoutes = require('./routes/alumnosBaja');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Conectar a MongoDB
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a la base de datos:', err));

// Rutas
app.use('/api/alumnos', alumnosRoutes);
app.use('/api/remedules', remedulesRoutes);
app.use('/api/alumnosBaja', alumnosBajaRoutes);

// Escuchar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
