import { Persona } from "./persona"; //
import { Cliente } from "./Cliente"; //
import { Producto } from "./Producto";
import { Organo } from "./Organo";
import { Niño } from "./Niño";

const persona1 = new Persona("Juan", "Pérez", new Date(1990, 0, 15), 175, 70, true);
const persona2 = new Cliente("Fede", "Lopez", new Date(1983, 3, 25), 190, 78, false, 2);
const producto1 = new Producto("Leche", 500, 25);
const producto2 = new Producto("Arroz", 300, 30);
const producto3 = new Producto("Huevos", 1300, 15);
const organo1 = new Organo("Higado", 10000, 30);
const organo2 = new Organo("Pulmon", 15000, 40);
const organo3 = new Organo("Vesicula", 20000, 50);
const niño1 = new Niño("Juan", 50000, 5, 2);
const niño2 = new Niño("María", 50000, 5, 1);
const niño3 = new Niño("Pedro", 50000, 5, 0.4);


console.log('esta todo bien');
persona1.setNombre("NuevoNombre");
console.log(`Nombre: ${persona1.getNombre()}`);
console.log(`Apellido: ${persona1.getApellido()}`);
console.log(`Nombre: ${persona2.getNombre()}`);
console.log(`Apellido: ${persona2.getApellido()}`);
console.log(`Nombre: ${producto1.getNombre()}`);
console.log(`Nombre: ${producto2.getNombre()}`);
console.log(`Nombre: ${producto3.getNombre()}`);
console.log(`Nombre: ${organo1.getNombre()}`);
console.log(`Nombre: ${organo2.getNombre()}`);
console.log(`Nombre: ${organo3.getNombre()}`);
console.log(`Nombre: ${niño1.getNombre()}`);
console.log(`Nombre: ${niño2.getNombre()}`);
console.log(`Nombre: ${niño3.getNombre()}`);