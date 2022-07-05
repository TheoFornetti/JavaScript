// Son funciones con la sintaxis simplificada
//Ejemplos

//La flecha remplaza la sintaxis de function, n1 en este caso es el parametro. Al tener mas de un parametro se debe usar parentesis

let Multiplicacion = (N1,N2) => N1 * N2;

//a la hora de llamar a la funcion es igual quie en un caso normal
console.log(Multiplicacion(2,2))

let EsFinde = dia =>{
    if (dia === 'Sabado' || dia === 'Domingo'){
        return 'Efectivamente es finde'
    }
    else{
        return 'No es fin de semana'
    }
}

console.log(EsFinde('Sabado'))

//Funciones sin parametros 

let saludo = () => 'Hola, como estas?'

console.log(saludo())

let contarCinco = () =>{
    for (i=1; i<=5; i++){
        console.log(i);
    }
}

console.log(contarCinco())

let queja = () => 'Me duele la espalda'

console.log(queja())

//Ejemplo con parametro

let saludar = nombre => 'Hola ' + nombre;

console.log(saludar('Theo'))

//Ejemplo con multiples parametros

let alo = (nombre,apellido) => 'Hola ' + nombre + ' ' + apellido;

console.log(alo('Theo', 'Fornetti'))

