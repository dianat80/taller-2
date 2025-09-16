const producto = {
  nombre: "Camiseta",
  precio: 45000,
  stock: 10,
  precioOferta: 35000 
};

const tienePrecioOferta = producto.hasOwnProperty('precioOferta');

console.log(tienePrecioOferta);