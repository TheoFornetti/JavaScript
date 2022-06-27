//Habla de como podemos acceder a las distinatas variables segun en donde se encuentren
//Por ejemplo, una variable globla puede ser utilizada en una funcion, con variables locales
//Pero no podemops mandar a llamr una variable dentro de una funcion y usarla como vasriable global 

var name = "Theo"

function nombre(){
    var miApellido = "Fornetti"
    console.log (name +" "+ miApellido)
}

nombre();