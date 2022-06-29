var frutas = ["Manzana", "Banana", "Cereza", "Frutilla"]; //Forma sintactica general

consol.log(frutas.length)//Muestra cuantos items hay dentro del array 
consol.log(frutas[n])//Nos permite acceder a cualquier dato dentro del array 

//Metodos para cambiar el array  
//Metod PuSH
var masFrutas = frutas.push("Uvas"); //Empuja elementos al final del array

//Metod Pop 
var ultimo = frutas.pop("Uvas")//Elimina el ultimo elemento en el array

//Metod Unshift 
var nuevalongitud = frutas.unshift("Uvas");//Agregan elemnetos al inicio de nuestra lista

//Metod Shift 
var borrar= frutas.shift("Uvas");//elimina el elemento que se encuentra al incio del array 

//Metod indexof
var posicion = frutas.indexOf("Cereza") //No de=ice en que posicion del array se encuentrs en el elemento 