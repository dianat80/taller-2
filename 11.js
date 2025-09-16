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


const nombreBuscado = "Pantalon";

const productoEncontrado = tienda.productos.find(
  (producto) => producto.nombre === nombreBuscado
);

if (productoEncontrado) {
  console.log(`Se encontró el producto:`, productoEncontrado);
} else {
  console.log(`El producto "${nombreBuscado}" no se encontró.`);
}

const nombreNoExistente = "Chaqueta";
const productoNoEncontrado = tienda.productos.find(
  (producto) => producto.nombre === nombreNoExistente
);

if (productoNoEncontrado) {
  console.log(`Se encontró el producto:`, productoNoEncontrado);
} else {
  console.log(`El producto "${nombreNoExistente}" no se encontró.`);
}