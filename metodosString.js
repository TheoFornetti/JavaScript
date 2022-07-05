//Para JS un String es un objeto 

//Metodos

//Ejemplo length

let mensaje = "            Buen dia para practicar js"
//console.log(mensaje.length);

//Ejemplo de indexOf

//console.log(mensaje.indexOf('dia'))

//Ejemplo slice

//console.log(mensaje.slice(0,4))

//Ejemplo trim(), elimina espacios en blanco 

//let sinEspacios =mensaje.trim()

//Ejemplo split(), convierte un string en un array 

//console.log(sinEspacios.split(' '))

//Replace(), cambia una porcion de texto por uno que tu esccribas 

//console.log(sinEspacios.replace('js','JS'))

//Ejemplos 

function dominio(S){
    return 'http://www.' + S
}

console.log(dominio("digitalhouse.com.ar"))

//Contar los caracteres 

let texto= "Hola Theo, como estas?"

console.log(texto.length)

//Replace 

function Remplazo(cadena, palabraVieja, palabraNueva){
    return cadena.replace(palabraVieja, palabraNueva)
    
}

let txt= 'Este texto es mala onda'

console.log(Remplazo(txt, 'mala', 'buena'))

//Buscar palabra 

function Menciona(txt, palabra){
    return txt.indexOf(palabra);
}

let text= 'Hola Theo como estas?'

console.log(Menciona(text, 'theo'))

//Reccortar 

let presentacion = 'hola soy carli'

let licensiada = presentacion.slice(9,14)
console.log(licensiada)


