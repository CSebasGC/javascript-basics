class Persona{
    
    nombre = ''; 
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre='Sin nombre', codigo='Sin codigo', frase='Sin frase', comida='Sin comida'){
        this.nombre = nombre
        this.codigo = codigo;
        this.frase = frase;
        this.comida = comida;
    }
    quienSoy(){
        console.log(`Soy ${this.comida} y mi identidad es ${this.nombre}`);//` este simbolo se llama backtick y se saca con alt + 96
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman','Soy tu amigable vecino Spiderman', 'Pizza');
const ironman = new Persona('Tony Stark', 'Ironman','Yo soy Ironman', 'Pollo');
console.log(spiderman);
console.log(ironman);

spiderman.quienSoy();
ironman.quienSoy();