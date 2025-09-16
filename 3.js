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

const mejorEstudiante = estudiantes.reduce((estudianteA, estudianteB) => {
  return (estudianteA.notaFinal > estudianteB.notaFinal) ? estudianteA : estudianteB;
});

console.log(`La estudiante con la nota mas alta es ${mejorEstudiante.nombre} con ${mejorEstudiante.notaFinal}.`);