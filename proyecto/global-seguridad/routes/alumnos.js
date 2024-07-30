const express = require('express');
const router = express.Router();

// Importar el controlador de alumnos
const alumnosController = require('../controllers/alumnosController');

// Rutas para manejar alumnos
router.get('/', alumnosController.obtenerAlumnos);
router.post('/', alumnosController.crearAlumno);
router.get('/:id', alumnosController.obtenerAlumnoPorId);
router.put('/:id', alumnosController.actualizarAlumno);
router.delete('/:id', alumnosController.eliminarAlumno);

// Exportar el router
module.exports = router;
