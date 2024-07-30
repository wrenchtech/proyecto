const express = require('express');
const router = express.Router();

// Importar el controlador de alumnos_baja
const alumnosBajaController = require('../controllers/alumnosBajaController');

// Rutas para manejar alumnos dados de baja
router.get('/', alumnosBajaController.obtenerAlumnosBaja);
router.post('/', alumnosBajaController.crearAlumnoBaja);
router.get('/:id', alumnosBajaController.obtenerAlumnoBajaPorId);
router.put('/:id', alumnosBajaController.actualizarAlumnoBaja);
router.delete('/:id', alumnosBajaController.eliminarAlumnoBaja);

// Exportar el router
module.exports = router;
