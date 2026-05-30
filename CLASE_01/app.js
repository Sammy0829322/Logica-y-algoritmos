import { registrarDestino, mostrarItinerario } from './viajes.js';
// Iniciar la aplicación
function iniciarApp() {
    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión",30);
    registrarDestino("Europa", "2024-07-01", "Autobus",15);

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();