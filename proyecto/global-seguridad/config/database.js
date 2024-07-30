// Importar la librería mongoose
const mongoose = require('mongoose');

// Importar dotenv para manejar variables de entorno
require('dotenv').config();

// Configuración de la URI de conexión a MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/GLOBAL_SEGURIDAD';

// Configurar opciones de conexión
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true, // Para el manejo de índices
  useFindAndModify: false // Para métodos de actualización
};

// Función para conectar a la base de datos
const connectDB = async () => {
  try {
    // Intentar conectar a MongoDB
    await mongoose.connect(MONGODB_URI, mongooseOptions);
    console.log('Conexión a MongoDB exitosa');
  } catch (error) {
    // Manejar errores de conexión
    console.error('Error al conectar a MongoDB:', error.message);
    process.exit(1); // Salir del proceso si falla la conexión
  }
};

// Exportar la función de conexión
module.exports = connectDB;
