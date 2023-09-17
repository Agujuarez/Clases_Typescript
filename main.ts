import { Persona } from "./persona"; //
import { Cliente } from "./Cliente"; //
import { Producto } from "./Producto";

const persona1 = new Persona("Juan", "Pérez", new Date(1990, 0, 15), 175, 70, true);
const persona2 = new Cliente("Fede", "Lopez", new Date(1983, 3, 25), 190, 78, false, 2);
const producto1 = new Producto("Leche", 500, 25);

console.log('esta todo bien');
persona1.setNombre("NuevoNombre");
console.log(`Nombre: ${persona1.getNombre()}`);
console.log(`Apellido: ${persona1.getApellido()}`);
console.log(`Nombre: ${persona2.getNombre()}`);
console.log(`Apellido: ${persona2.getApellido()}`);
console.log(`Nombre: ${producto1.getNombre()}`);
