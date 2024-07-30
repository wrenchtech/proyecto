const AlumnoBaja = require('../models/alumnoBaja');

// Obtener todos los alumnos dados de baja
exports.obtenerAlumnosBaja = async (req, res) => {
  try {
    const alumnosBaja = await AlumnoBaja.find();
    res.json(alumnosBaja);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener alumnos dados de baja', error });
  }
};

// Crear un nuevo alumno dado de baja
exports.crearAlumnoBaja = async (req, res) => {
  try {
    const nuevoAlumnoBaja = new AlumnoBaja(req.body);
    await nuevoAlumnoBaja.save();
    res.status(201).json(nuevoAlumnoBaja);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear alumno dado de baja', error });
  }
};

// Obtener un alumno dado de baja por ID
exports.obtenerAlumnoBajaPorId = async (req, res) => {
  try {
    const alumnoBaja = await AlumnoBaja.findById(req.params.id);
    if (!alumnoBaja) {
      return res.status(404).json({ mensaje: 'Alumno dado de baja no encontrado' });
    }
    res.json(alumnoBaja);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener alumno dado de baja', error });
  }
};

// Actualizar un alumno dado de baja por ID
exports.actualizarAlumnoBaja = async (req, res) => {
  try {
    const alumnoBajaActualizado = await AlumnoBaja.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!alumnoBajaActualizado) {
      return res.status(404).json({ mensaje: 'Alumno dado de baja no encontrado' });
    }
    res.json(alumnoBajaActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar alumno dado de baja', error });
  }
};

// Eliminar un alumno dado de baja por ID
exports.eliminarAlumnoBaja = async (req, res) => {
  try {
    const alumnoBajaEliminado = await AlumnoBaja.findByIdAndDelete(req.params.id);
    if (!alumnoBajaEliminado) {
      return res.status(404).json({ mensaje: 'Alumno dado de baja no encontrado' });
    }
    res.json({ mensaje: 'Alumno dado de baja eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar alumno dado de baja', error });
  }
};
