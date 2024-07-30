// Importar la librería mongoose
const mongoose = require('mongoose');

// Definir el esquema para Alumnos
const AlumnoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true, // El campo es obligatorio
    trim: true // Elimina espacios en blanco al inicio y al final
  },
  apellidopa: {
    type: String,
    required: true,
    trim: true
  },
  apellidoma: {
    type: String,
    required: true,
    trim: true
  },
  promedio: {
    type: Number,
    required: true,
    min: 0, // Valor mínimo permitido
    max: 10 // Valor máximo permitido
  }
}, {
  timestamps: true // Agrega campos de creación y modificación automática
});

// Crear el modelo para Alumnos
const Alumno = mongoose.model('Alumno', AlumnoSchema);

// Exportar el modelo
module.exports = Alumno;
