//Nos sirve para realizar tareas que necesiten cierta confirmacion antes de arrancar

var usuario=10;


//Que va a comprobar
if (usuario === 18 ){
    //Cuerpo del condicional, van las tareas
    console.log('Es la primera vez que votas!')
    console.log("En breve se te dara una explicacion")
}
else if(usuario > 18){ //Nos permite seguir haciendo comprobaciones
    console.log("Ya sabes como votar") 

}
else{
    console.log("Eres menor de edad, no puedes votar")
}

//Operador ternario: genera el if y else en una sola linea
condition ? true : false;

var num =  1;

var rta = num === 1 ? 'Soy un uno' : 'No soy un uno';