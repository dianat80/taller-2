const estudiantes = [
  {
    nombre: 'Diana',
    edad: 25,
    notaFinal: 4.3
  },
  {
    nombre: 'Karen',
    edad: 29,
    notaFinal: 3.3
  },
  {
    nombre: 'Caro',
    edad: 35,
    notaFinal: 3.5
  },
  {
    nombre: 'meli',
    edad: 23,
    notaFinal: 2.9
  },
  {
    nombre: 'laura',
    edad: 21,
    notaFinal: 2.1
  }
];

const estudiantesAprobados = estudiantes.filter(estudiante => estudiante.notaFinal >= 3.5);

console.log(estudiantesAprobados);