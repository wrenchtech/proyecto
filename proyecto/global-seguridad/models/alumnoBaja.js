const mongoose = require('mongoose');

// Definir el esquema para Alumnos_Baja
const AlumnoBajaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  apellidopa: {
    type: String,
    required: true,
    trim: true,
  },
  promedio: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
}, {
  timestamps: true,
});

// Crear el modelo para Alumnos_Baja
const AlumnoBaja = mongoose.model('AlumnoBaja', AlumnoBajaSchema);

// Exportar el modelo
module.exports = AlumnoBaja;
