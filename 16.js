const tienda = {
  nombre: "La Tienda Misteriosa",
  ubicacion: "Santa clara",
  productos: [
    {
      nombre: "Camiseta",
      precio: 45000,
      stock: 10
    },
    {
      nombre: "Pantalon",
      precio: 100000,
      stock: 5
    },
    {
      nombre: "Zapatos",
      precio: 75000,
      stock: 8
    },
    {
      nombre: "Gorra",
      precio: 25000,
      stock: 20
    }
  ]
};

console.log(tienda);

const productosDisponibles = tienda.productos.filter(producto => producto.stock > 0);
console.log("\nProductos con stock mayor a 0:");
console.log(productosDisponibles);

const productoBuscado = tienda.productos.find(producto => producto.nombre === "Pantalon");
console.log("\nProducto 'Pantalon' encontrado:");
console.log(productoBuscado);


const productosConIVA = tienda.productos.map(producto => ({
  nombre: producto.nombre,
  precioConIVA: producto.precio * 1.19
}));
console.log("\nProductos con precio + IVA (19%):");
console.log(productosConIVA);

function venderProducto(nombre, cantidad) {
  const productoIndex = tienda.productos.findIndex(p => p.nombre === nombre);
  if (productoIndex === -1) {
    console.error(`\nError: Producto "${nombre}" no encontrado.`);
    return;
  }

  if (tienda.productos[productoIndex].stock >= cantidad) {
    tienda.productos[productoIndex].stock -= cantidad;
    console.log(`\nVenta exitosa: ${cantidad} unidades de "${nombre}" vendidas. Stock restante: ${tienda.productos[productoIndex].stock}`);
  } else {
    console.error(`\nError: Stock insuficiente para "${nombre}". Stock disponible: ${tienda.productos[productoIndex].stock}`);
  }
}


venderProducto("Camiseta", 3);
venderProducto("Gorra", 25);
venderProducto("Pantalon", 2);

const tiendaDuplicada = Object.assign({}, tienda);
tiendaDuplicada.nombre = "La Tienda Clonada";
console.log("\nTienda Original:");
console.log(tienda);
console.log("\nTienda Duplicada (con nombre cambiado):");
console.log(tiendaDuplicada);
console.log("¿Son el mismo objeto?", tienda === tiendaDuplicada);


console.log("\nPropiedades del producto 'Zapatos':");
const productoZapatos = tienda.productos.find(p => p.nombre === "Zapatos");
if (productoZapatos) {
  Object.entries(productoZapatos).forEach(([clave, valor]) => {
    console.log(`${clave}: ${valor}`);
  });
}



const totalStock = tienda.productos.reduce((acumulador, producto) => acumulador + producto.stock, 0);

console.log(`Total de unidades en stock: ${totalStock}`);