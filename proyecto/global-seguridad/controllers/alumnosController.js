const Alumno = require('../models/alumno');

// Obtener todos los alumnos
exports.obtenerAlumnos = async (req, res) => {
  try {
    const alumnos = await Alumno.find();
    res.json(alumnos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener alumnos', error });
  }
};

// Crear un nuevo alumno
exports.crearAlumno = async (req, res) => {
  try {
    const nuevoAlumno = new Alumno(req.body);
    await nuevoAlumno.save();
    res.status(201).json(nuevoAlumno);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear alumno', error });
  }
};

// Obtener un alumno por ID
exports.obtenerAlumnoPorId = async (req, res) => {
  try {
    const alumno = await Alumno.findById(req.params.id);
    if (!alumno) {
      return res.status(404).json({ mensaje: 'Alumno no encontrado' });
    }
    res.json(alumno);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener alumno', error });
  }
};

// Actualizar un alumno por ID
exports.actualizarAlumno = async (req, res) => {
  try {
    const alumnoActualizado = await Alumno.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!alumnoActualizado) {
      return res.status(404).json({ mensaje: 'Alumno no encontrado' });
    }
    res.json(alumnoActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar alumno', error });
  }
};

// Eliminar un alumno por ID
exports.eliminarAlumno = async (req, res) => {
  try {
    const alumnoEliminado = await Alumno.findByIdAndDelete(req.params.id);
    if (!alumnoEliminado) {
      return res.status(404).json({ mensaje: 'Alumno no encontrado' });
    }
    res.json({ mensaje: 'Alumno eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar alumno', error });
  }
};
