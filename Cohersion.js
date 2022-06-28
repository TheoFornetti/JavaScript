//Cohersion forma en la wue podemos cambiar un tipo de valotr a otro tipo de valor 
//Cohersiopn explicita: Forma explicita en que obligamos a un valor a cambiar de tipo 
//Cohercion implicita: cuando el lenguaje solo cambia de un tipo de valor a otro tipo de valor 

var a = 4 * "7";//Entiende esto como una operacion, es una cohercion implicita 

console.log(a)//Al usar el signo de multiplicacion entiende que es una operacion y el lenguaje transforma el 7 en numero

var b = 4 +"7" //Toma a esta variable como una string, es una cohersion implicita
                
console.log(b)//Entiende que es una concatenacion, y devuelve un 47

//Cohercion explicita

var c = 20 //Esta variable es un numero, un entero
var d = String(c)// transformo implicitamente el numero en string 

var e = Number(d)//Transformo el d a numero 
