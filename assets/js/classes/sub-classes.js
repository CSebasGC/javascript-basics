class Persona{

    static _conteo = 0;
    static get conteo(){
          return Persona._conteo + ' instancias';
    }
 
    static mensaje(){
         console.log(this.nombre);//no se puede acceder a las propiedades de la clase
         console.log('Hola a todos, soy un metodo estatico');
    }
 
     nombre = ''; 
     codigo = '';
     frase = '';
     comida = '';
 
 
 
     constructor(nombre='Sin nombre', codigo='Sin codigo', frase='Sin frase', comida='Sin comida'){
         this.nombre = nombre
         this.codigo = codigo;
         this.frase = frase;
         this.comida = comida;
 
         Persona._conteo++;//con esto se lleva el conteo de cuantas veces se ha instanciado la clase
     }
 
     //set es para modificar y solo reciben un parametro
     //get es para obtener
     set setComidaFavorita(comida){
         this.comida = comida.toUpperCase();
     }
     get getComidaFavorita(){
         return `La comida favorita de ${this.nombre} es ${this.comida}`;
     }
 
     quienSoy(){
         console.log(`Soy ${this.comida} y mi identidad es ${this.nombre}`);//` este simbolo se llama backtick y se saca con alt + 96
     }
 
     miFrase(){
         console.log(`${this.codigo} dice: ${this.frase}`);
     }
 }

 class Heroe extends Persona{
    clan = 'Sin Clan';

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);
        this.clan = 'Los Vengadores';
    }
    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }

 }

 const spiderman = new Heroe('Peter Parker', 'Spiderman','Soy tu amigable vecino Spiderman', 'Pizza');
//const spiderman = new Heroe();

console.log(spiderman);
spiderman.quienSoy();