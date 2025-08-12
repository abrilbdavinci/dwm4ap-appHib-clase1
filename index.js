const Alumno =require('./Alumno.js');

let nombre = "Jonathan";

const alumno1 = new Alumno (nombre, "Ruiz", 27, "DW" ,"pintar");
alumno1.modificarEdad(35);

alumno1.agregarMateria("deontología")

console.log( alumno1.edad);

console.log(alumno1.materias)