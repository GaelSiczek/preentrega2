const carrito = [];

const remera = {
    nombre: "Remera",
    precio: 8.000,
    subtotal: 8.000,
    cantidad: 1,
};
const buzo = {
    nombre: "buzo",
    precio: 20.000,
    subtotal: 20.000,
    cantidad: 1,
};
const pantalon = {
    nombre: "Pantalon",
    precio: 15.000,
    subtotal: 15.000,
    cantidad: 1,
};


carrito.push(remera);
carrito.push(buzo);
carrito.push(pantalon);


function enCarrito(nombrePrompt) {
    return carrito.find((producto) => producto.nombre == nombrePrompt);
}


function buscar() {
    const keyword = prompt("¿Qué prenda de ropa desea buscar?");
    const arrayResultados = carrito.filter((el) =>
    el.nombre.toLowerCase().includes(keyword.toLowerCase())
);
    console.log(arrayResultados);
}


function agregar() {
    const nombrePrompt = prompt("Introduzca el nombre de la prenda que desea agregar:");
    const nuevoProducto = {
    nombre: nombrePrompt,
    precio: parseInt(precioPrompt),
    subtotal: parseInt(precioPrompt),
    cantidad: 1,
    };
    const productoEncontrado = enCarrito(nombrePrompt);
    if (productoEncontrado) {
    productoEncontrado.cantidad++;
    productoEncontrado.precio = parseInt(precioPrompt);
    productoEncontrado.subtotal = parseInt(precioPrompt) * productoEncontrado.cantidad;
    } else {
    carrito.push(nuevoProducto);
    }
    alert( nombrePrompt + " fue agregado al carrito.");
    listar();
}


function listar() {
    console.clear();
    console.log("Productos que hay en el carrito:");
    carrito.forEach((elemento) => {
    console.log("----------");
    console.log("Nombre:", elemento.nombre);
    console.log("Precio:", elemento.precio);
    console.log("Cantidad:", elemento.cantidad);
    console.log("Subtotal:", elemento.subtotal);
    });
    const totalCarrito = carrito.reduce((acu, el) => acu + el.subtotal, 0);
    console.log("TOTAL DEL CARRITO: $", totalCarrito);
    const preciosActualizados = carrito.map((producto) => {
    return {
        nombre: producto.nombre,
        precio: producto.precio * 1.25,
        cantidad: producto.cantidad,
    };
    });
    console.log("Precios actualizados:", preciosActualizados);
    const nuevoArrayReordenado = carrito.sort((el1, el2) => {
    if (el1.precio < el2.precio) {
        return 1;
    }
    if (el1.precio > el2.precio) {
        return -1;
    }
    return 0;
    });
    console.log("Nuevo array reordenado:", nuevoArrayReordenado);
}


function quitar() {
    const nombrePrompt = prompt("¿Qué producto querés quitar?");
    const productoEncontrado = enCarrito(nombrePrompt);
    if (productoEncontrado) {
    const indiceProducto = carrito.indexOf(productoEncontrado);
    carrito.splice(indiceProducto, 1);
    alert("El producto " + productoEncontrado.nombre + " fue borrado del carrito.");
    listar();
    } else {
    alert("No se encontró " + nombrePrompt + " en el carrito.");
    }
}