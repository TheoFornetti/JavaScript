//Es un formato de texto sencillo que es utilizado para intercambiar datos entre distintos sistemas
//Transforma el codigo de diferentes paginas a un idioma comun
//Significa JavaScript Object Notation,Sirve para comunicar sistemas entre si 

//Metodos

persona = {
    nombre:"Theo",
    edad: 20,
    Pareja: "Julia"
}

console.log(persona)

//JSON.stringify(), convierte un tipo de dato de JS a una cadena de texto

let personanueva = JSON.stringify(persona);

console.log(personanueva)

//JSON.parse(), convierte una cadena en formato texto a un tipo de datos de js 

let personaOriginal=JSON.parse(personanueva);

console.log(personaOriginal)
