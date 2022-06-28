// Cuando las variables y funciones se procesan antes que se ejecute cualquier tipo de codigo
// En este caso se esta mandando a llamar la variable antes de que sea declarada 
//Sucede que las variables suben al inicio, como si tuvierasn helio, peros solo la variable no su valor d
//En cambio las funciones suben cokpletas, lo que nos permiten llamarlas antes de declararlas
console.log(miNombre)

var miNombre;
miNombre = "Theo";

//Hoisting de funciones 
holafuncion();

function holafuncion(){
    console.log("Hola " + minombre);
}

var minombre = "Theo"

//En sintesis 
//Las variables se moveran arriba del scope en el que se encuentren, pero sin sun valores
//Las funciones subiran completas arriba del scope