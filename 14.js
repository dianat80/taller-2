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

const tiendaDuplicada = Object.assign({}, tienda);

tiendaDuplicada.nombre = "La Tienda Alternativa";

console.log("Tienda Original:", tienda);
console.log("Tienda Duplicada:", tiendaDuplicada);