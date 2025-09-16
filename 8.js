const estudiantes = [
  {
    nombre: "Diana",
    edad: 25,
    notaFinal: 4.3
  },
  {
    nombre: "Karen",
    edad: 29,
    notaFinal: 3.3
  },
  {
    nombre: "Caro",
    edad: 35,
    notaFinal: 3.5
  },
  {
    nombre: "meli",
    edad: 23,
    notaFinal: 2.1
  },
  {
    nombre: "laura",
    edad: 21,
    notaFinal: 1.9
  }
];

const estudianteSeleccionado = estudiantes[0];

const claves = Object.keys(estudianteSeleccionado);
console.log(claves);

const valores = Object.values(estudianteSeleccionado);
console.log(valores);