//Conjunto de sentencias que nosotros ppodemos utilizar para poder realizar, haciendo uso de las variables, tareas especificas.
//Dentro de la funcion hay ciertos procedimientos o tareas, que haciendo uso de la variables nos van a devolver resultados especificos.
//Caja negra que recibe informacion la procesa y nos devuelve un resultado 

//Existen dos tipos de funciones
//La diferencia es que podemos mandar a llamar una funcion declarativa antes de que esta sea declarada y la no podemos hacer lo mismo con las expresion  

//Declarativa, son guardadas en memoria y pueden ser llamadas en cualquier momento

function miFuncion(){
    return 3;
}

//Expresion, Se declara la funcion haciendo uso de una variable

var miFuncion = function(){
    return 3;
}

miFuncion();

//Funcion con parametro 

function saludarEstudiante(estudiante){
    console.log(`Hola ${estudiante}`)
}

saludarEstudiante("Theo"); 

//Funcion con return 

function sumar(a,b){
    var resultado = a+b;
    return resultado;
}

sumar(2,3);
//Deberia retornar 5