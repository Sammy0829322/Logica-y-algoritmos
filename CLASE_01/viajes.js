
// Array para guardar los destinos
const destinos = [];
let porcentaje=0;

// Función para registrar un destino de viaje
 export function registrarDestino(destino, fecha, transporte,num_pasajeros) {
    // TODO: Crear un objeto con los datos del destino
    const nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        num_pasajeros: num_pasajeros,
        costo: calcularCosto(destino, transporte,num_pasajeros)
    };

    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje
function calcularCosto(destino, transporte,num_pasajeros) {
    let costoBase = 0;

    // Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    }

    else if (destino === "Japon") {
        costoBase = 1000;
    }

    else if (destino === "Mexico") {
        costoBase = 300;
    }
    else if (destino === "Europa") {
        costoBase = 800;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    }
     else if (transporte === "Barco") {
        costoBase += 300;
    }
     else if (transporte === "Autobus") {
        costoBase += 150;
    }

    if (num_pasajeros >= 20) {
        porcentaje=0.25;
        costoBase=descuento(costoBase,porcentaje);
    }
    else if (num_pasajeros <= 20){
        porcentaje=0.10;
        costoBase=descuento(costoBase,porcentaje);  
        
    }

    return costoBase;
}

// Función para mostrar el itinerario de los viajes registrados
 export function mostrarItinerario() {
    // TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
    destinos.forEach(viaje => {
        console.log("Destino: " + viaje.destino);
        console.log("Fecha: " + viaje.fecha);
        console.log("Transporte: " + viaje.transporte);
        console.log("Costo: $" + viaje.costo);
        console.log("numero de pasajeros " + viaje.num_pasajeros)
        console.log("---------------------------");
    });
};

const descuento = (costoBase,porcentaje) => costoBase-(costoBase*porcentaje)
