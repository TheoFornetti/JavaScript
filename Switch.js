//Forma de validar condiciones, pero funciona por casos
//Sintaxis:
var num = 2;

switch (num){
    case 1:
        console.log("Soy uno");
        break;
    case 2:
        console.log("Soy un 2");
        break;
    case 3: 
        console.log("Soy un tres ")
        break;
    default:
        console.log("No soy nadie")
}

if (false === !true) { console.log(false == true) } else { console.log(true === !false) }