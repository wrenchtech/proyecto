const Remedule = require('../models/remedule');

// Obtener todos los remedules
exports.obtenerRemedules = async (req, res) => {
  try {
    const remedules = await Remedule.find().populate('alumno');
    res.json(remedules);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener remedules', error });
  }
};

// Crear un nuevo remedule
exports.crearRemedule = async (req, res) => {
  try {
    const nuevoRemedule = new Remedule(req.body);
    await nuevoRemedule.save();
    res.status(201).json(nuevoRemedule);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear remedule', error });
  }
};

// Obtener un remedule por ID
exports.obtenerRemedulePorId = async (req, res) => {
  try {
    const remedule = await Remedule.findById(req.params.id).populate('alumno');
    if (!remedule) {
      return res.status(404).json({ mensaje: 'Remedule no encontrado' });
    }
    res.json(remedule);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener remedule', error });
  }
};

// Actualizar un remedule por ID
exports.actualizarRemedule = async (req, res) => {
  try {
    const remeduleActualizado = await Remedule.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).populate('alumno');
    if (!remeduleActualizado) {
      return res.status(404).json({ mensaje: 'Remedule no encontrado' });
    }
    res.json(remeduleActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar remedule', error });
  }
};

// Eliminar un remedule por ID
exports.eliminarRemedule = async (req, res) => {
  try {
    const remeduleEliminado = await Remedule.findByIdAndDelete(req.params.id);
    if (!remeduleEliminado) {
      return res.status(404).json({ mensaje: 'Remedule no encontrado' });
    }
    res.json({ mensaje: 'Remedule eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar remedule', error });
  }
};
