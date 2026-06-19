
const fs = require('fs');

// Ruta del archivo de notas
const filePath = './notas.json';

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */

function agregarNota(titulo, contenido) {
  let notas = [];
  if (fs.existsSync(filePath)) {
    // PISTA: Aquí debes leer las notas existentes antes de agregar la nueva.
    // COMPLETAR: Usa fs.readFileSync para leer el archivo.
    const data = fs.readFileSync(filePath, 'utf8');
    notas = JSON.parse(data);
  }

  const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);

  // PISTA: Ahora debes sobrescribir el archivo con las notas actualizadas.
  // COMPLETAR: Usa fs.writeFileSync para guardar las notas.

  // 2. Para guardar las notas actualizadas:
  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
  console.log('Nota agregada con éxito.');
}


/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
  if (fs.existsSync(filePath)) {
    // PISTA: Debes leer y parsear el contenido del archivo.
    // COMPLETAR: Usa fs.readFileSync para leer y JSON.parse para convertir el contenido.
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);
    console.log(notas);
  } else {
    console.log('No hay notas guardadas.');
  }
}


/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
  if (fs.existsSync(filePath)) {
    // PISTA: Primero lee todas las notas.
    // COMPLETAR: Usa fs.readFileSync para leer el archivo.
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);

    const datoExiste = notas.some((nota) => nota.titulo == titulo)

    if (datoExiste === true) {
      const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);

      fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));

      console.log(`Nota con título "${titulo}" eliminada.`);

    }

    else {
      console.log(`Nota con título "${titulo}" no se encontro.`);
    }

    // PISTA: Filtra las notas y elimina la que coincida con el título.
    // COMPLETAR: Usa Array.filter para obtener las notas restantes.

    // PISTA: Sobrescribe el archivo con las notas actualizadas.
    // COMPLETAR: Usa fs.writeFileSync.
  } else {
    console.log('No hay notas para eliminar.');
  }
}

agregarNota('Compras', 'Comprar leche y pan.');
agregarNota('Trabajo', 'Terminar el reporte semanal.');
agregarNota('Supermercado', 'Comprar huevos, fruta y café.');
agregarNota('Gimnasio', 'Llevar toalla y renovar mensualidad.');
agregarNota('Dentista', 'Cita de limpieza el jueves a las 5 PM.');
agregarNota('Casa', 'Sacar la basura y regar las plantas.');

listarNotas();
eliminarNota('Trabajo');
listarNotas();