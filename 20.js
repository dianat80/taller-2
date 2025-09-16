const tienda = {
  productos: [
    { nombre: "Camiseta", precio: 45000 },
    { nombre: "Pantalon", precio: 100000 },
    { nombre: "Zapatos", precio: 75000 },
  ]
};

const carrito = [];

function agregarProducto(nombre, cantidad) {
  const productoEncontrado = tienda.productos.find(p => p.nombre === nombre);
  if (productoEncontrado) {
    carrito.push({
      nombre: productoEncontrado.nombre,
      precio: productoEncontrado.precio,
      cantidad: cantidad
    });
  }
}

function mostrarTotal() {
  const total = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  console.log(`Total a pagar: $${total}`);
}

agregarProducto("Camiseta", 2);
agregarProducto("Zapatos", 1);
mostrarTotal();