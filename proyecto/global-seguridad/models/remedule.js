const mongoose = require('mongoose');

// Definir el esquema para Remedules
const RemeduleSchema = new mongoose.Schema({
  alumno: {
    type: mongoose.Schema.Types.ObjectId, // Referencia al modelo Alumno
    ref: 'Alumno',
    required: true,
  },
  materia: {
    type: String,
    required: true,
    trim: true,
  },
  carrera: {
    type: String,
    required: true,
    trim: true,
  },
  estatus: {
    type: String,
    enum: ['pagado', 'no pagado'], // Solo permite estos valores
    required: true,
  },
}, {
  timestamps: true,
});

// Crear el modelo para Remedules
const Remedule = mongoose.model('Remedule', RemeduleSchema);

// Exportar el modelo
module.exports = Remedule;
