const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const alan = {
    nombre: 'Alan',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const dario = {
    nombre: 'Darío',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

function Persona(nombre, edad){
    console.log('Se ejecutó esta línea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir= function() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const maria = new Persona('María', 18);
const melissa = new Persona('Melissa', 34);
const carlos = new Persona('Carlos', 23);
console.log(maria); 
maria.imprimir();
melissa.imprimir();
carlos.imprimir();