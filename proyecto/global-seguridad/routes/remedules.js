const express = require('express');
const router = express.Router();

// Importar el controlador de remedules
const remedulesController = require('../controllers/remedulesController');

// Rutas para manejar remedules
router.get('/', remedulesController.obtenerRemedules);
router.post('/', remedulesController.crearRemedule);
router.get('/:id', remedulesController.obtenerRemedulePorId);
router.put('/:id', remedulesController.actualizarRemedule);
router.delete('/:id', remedulesController.eliminarRemedule);

// Exportar el router
module.exports = router;
