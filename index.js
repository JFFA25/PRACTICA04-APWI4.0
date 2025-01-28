import mongoose from "mongoose";
import app from './app.js';  // Importar el archivo app.js donde están las rutas

const mongoURI = 'mongodb+srv://sonicamador2005:paco1234@clusterpaco.tzvns.mongodb.net/groceries_db?retryWrites=true&w=majority&appName=ClusterPaco';

mongoose.connect(mongoURI)
    .then(() => {
        console.log('Conectado a MongoDB Atlas');
        // Aquí termina la conexión a la base de datos
    })
    .catch((err) => {
        console.error('Error de conexión:', err);
    });
