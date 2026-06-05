let listaDeCompras = [];

const agregarProducto = (producto) => {
    let bandera = false



    for (let i = 0; i < listaDeCompras.length; i++) {

        if (producto === listaDeCompras[i]) {

            bandera = true;
        }
    }


    if (bandera === true) {

        console.log("producto repetido : " + producto)
    }

    else {
        listaDeCompras.push(producto);
    }


}

const mostrarLista = () => console.log(listaDeCompras)

const eliminarProducto = (producto) => {
    let posicion = listaDeCompras.indexOf(producto);
    if (posicion !== -1) {
        listaDeCompras.splice(posicion, 1);
        console.log("Se eliminó: " + producto);
    } else {
        console.log("No se pudo eliminar, el producto no existe: " + producto);
    }
}

// comandos 
agregarProducto("Arroz");
agregarProducto("mantequilla");
agregarProducto("Arroz");
agregarProducto("carne");
agregarProducto("huevos");
agregarProducto("Leche");
agregarProducto("carne");
mostrarLista();
eliminarProducto("Leche");
mostrarLista();
