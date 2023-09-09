export class Persona {
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    altura: number;
    peso: number;
    estaVivo: boolean;

    constructor(nombre: string, apellido: string, fechaNacimiento: Date, altura: number, peso: number, estaVivo: boolean) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.altura = altura;
        this.peso = peso;
        this.estaVivo = estaVivo;
    } 
}