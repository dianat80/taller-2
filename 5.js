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




const estudianteConPeorNota = estudiantes.reduce((peorEstudiante, estudianteActual) => {
  return estudianteActual.notaFinal < peorEstudiante.notaFinal ? estudianteActual : peorEstudiante;
});

const indiceEstudiante = estudiantes.findIndex(estudiante => estudiante.nombre === estudianteConPeorNota.nombre);

if (indiceEstudiante !== -1) {
  estudiantes.splice(indiceEstudiante, 1);
}

console.log(estudiantes);