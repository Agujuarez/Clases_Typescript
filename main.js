"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona"); //
var Cliente_1 = require("./Cliente"); //
var Producto_1 = require("./Producto");
var persona1 = new persona_1.Persona("Juan", "Pérez", new Date(1990, 0, 15), 175, 70, true);
var persona2 = new Cliente_1.Cliente("Fede", "Lopez", new Date(1983, 3, 25), 190, 78, false, 2);
var producto1 = new Producto_1.Producto("Leche", 500, 25);
console.log('esta todo bien');
persona1.setNombre("NuevoNombre");
console.log("Nombre: ".concat(persona1.getNombre()));
console.log("Apellido: ".concat(persona1.getApellido()));
console.log("Nombre: ".concat(persona2.getNombre()));
console.log("Apellido: ".concat(persona2.getApellido()));
console.log("Nombre: ".concat(producto1.getNombre()));
