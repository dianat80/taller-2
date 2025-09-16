const clientes = [
  { id: 1, nombre: "Sam" },
  { id: 2, nombre: "Juan" },
  { id: 3, nombre: "Sara" },
];

const mensajesBienvenida = clientes.map(
  (cliente) => `Bienvenid@, ${cliente.nombre}  Esperamos que disfrutes tu visita`
);

console.log(mensajesBienvenida);
