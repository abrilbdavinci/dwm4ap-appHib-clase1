class Alumno {
    // Atributos
    nombre = "";
    apellido = ""
    edad;
    carrera = "";

    constructor(nombre, apellido, edad, carrera, materias=[]){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.carrera = carrera;
        this.materias = materias;
    }

    // Métodos
    obtenerCarrera(){
        return this.carrera;
    }
    obtenerDatos(){
        return `${this.nombre} ${this.apellido}`; 
    }
    modificarEdad(edad){
        this.edad = edad;
    }

    agregarMateria(materia){
        return materias.push(materia)
    }

    mostrarMaterias(){
        return this.materias;
    }

    retornarEdad(){
        return this.edad;
    }
}
let algo = "texto";
module.exports = Alumno;
