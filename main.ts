import { Persona } from "./persona"; //

const persona1 = new Persona("Juan", "Pérez", new Date(1990, 0, 15), 175, 70, true);
const persona2 = new Persona("Fede", "Lopez", new Date(1983, 3, 25), 190, 78, false);

console.log('esta todo bien');
persona1.setNombre("NuevoNombre");
console.log(`Nombre: ${persona1.getNombre()}`);
console.log(`Apellido: ${persona1.getApellido()}`);
console.log(`Nombre: ${persona2.getNombre()}`);
console.log(`Apellido: ${persona2.getApellido()}`);