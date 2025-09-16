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


function venderProducto(nombreProducto, cantidad) {
  
  const productoIndex = tienda.productos.findIndex(
    (producto) => producto.nombre.toLowerCase() === nombreProducto.toLowerCase()
  );

    if (productoIndex === -1) {
    console.error(`Error: El producto "${nombreProducto}" no se encuentra en la tienda.`);
    return; 
  }

  const producto = tienda.productos[productoIndex];

    if (producto.stock >= cantidad) {
    
    producto.stock -= cantidad;
    console.log(`Venta exitosa: Se vendieron ${cantidad} unidades de "${nombreProducto}".`);
    console.log(`Stock restante de "${nombreProducto}": ${producto.stock}`);
  } else {
    console.error(`Error: No hay suficiente stock para vender ${cantidad} unidades de "${nombreProducto}". Stock actual: ${producto.stock}`);
  }
}

console.log(tienda);

venderProducto("Camiseta", 3);
venderProducto("Pantalon", 6); 
venderProducto("Zapatos", 2);
venderProducto("Bufanda", 1); 

console.log(tienda);


const productosDisponibles = tienda.productos.filter(
  (producto) => producto.stock > 0
);
console.log(productosDisponibles);

const buscarProducto = (nombre) => {
  const productoEncontrado = tienda.productos.find(
    (p) => p.nombre.toLowerCase() === nombre.toLowerCase()
  );
  if (productoEncontrado) {
    console.log(`Se encontró el producto: ${productoEncontrado.nombre}`);
    return productoEncontrado;
  } else {
    console.log(`El producto "${nombre}" no se encontró.`);
    return null;
  }
};
buscarProducto("Gorra");
buscarProducto("Sudadera");

const IVA = 0.19;
const productosConIVA = tienda.productos.map(producto => ({
  nombre: producto.nombre,
  precioConIVA: producto.precio * (1 + IVA)
}));
console.log(productosConIVA);