//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
       { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
    { nombre: "Anillo", precio: 60, categoria: "Moda" },
    { nombre: "Audífonos", precio: 45, categoria: "Electrónica" },
    { nombre: "Mochila", precio: 35, categoria: "Accesorios" },
    { nombre: "Mesa", precio: 120, categoria: "Hogar" },
    { nombre: "Balón", precio: 25, categoria: "Deportes" },
    { nombre: "Reloj", precio: 90, categoria: "Moda" }
];

const menores = productos.filter(productos => productos.precio < 100);

const orden =menores.sort((a, b) => a.nombre.localeCompare(b.nombre));

const soloNombre =productos.map(productos => productos.nombre );

const tieneCamisas = soloNombre.includes("Camiseta");

const suma = productos.reduce((acumulador, productos) => acumulador + productos.precio, 0);

const tieneAnillos = productos.some(productos => productos.nombre === "Anillo");

 const productoCategoria = productos.find(productos => productos.categoria === "Electrónica");

console.log("Los productos menores a 100 son :",menores);
console.log("Los productos estan ordenados alfabeticamnete :", orden);
console.log("Los nombres de los productos son : " , soloNombre);
console.log("el precio total es : " + suma);
console.log( "¿Hay camisetas? "+ tieneCamisas);
console.log( "¿Hay anillos : ", tieneAnillos);
console.log("Hay productos seleccinados de la categoria Electronica :", productoCategoria )
