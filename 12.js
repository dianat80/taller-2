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

const productosConIVA = tienda.productos.map(producto => {
  const precioConIva = producto.precio * 1.19; 
  return {
    nombre: producto.nombre,
    precioConIVA: parseFloat(precioConIva.toFixed(2)) 
  };
});

console.log("\nProductos con nombre y precio con Iva (19%):");
console.log(productosConIVA);