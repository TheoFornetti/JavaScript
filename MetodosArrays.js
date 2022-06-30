var articulos = [
    {nombre: 'bici', costo: 3000},
    {nombre:'TV', costo: 3200},
    {nombre:'Celular', costo: 2000},
    {nombre:'Libro', costo: 320},
    {nombre:'Laptop', costo: 30200},
    {nombre:'Teclado', costo: 500},
    {nombre:'Audifonos', costo: 1700},    
]

//Metodos
//Ayuda a filtrar cosas especificas 
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
})

console.log(articulosFiltrados)

//Devuelve los atributos que se solicitan por pantalla
var nombreArticulo = articulos.map(function(articulo){
    return articulo.nombre;
})

console.log(nombreArticulo)

//Find, nos va a ayudar a encontrar algo dentro del arreglo 
var Buscar=articulos.find(function(articulo){
    return articulo.nombre === 'Celular'
})

console.log(Buscar)

//For each(), 

articulos.forEach(function(articulo){
    console.log(articulo.nombre)
})

//Some, regresa verdadero y falso para objetos que cumplan una validacion
var ArticulosBaratos = articulos.some(function(articulo){
    return articulo.costo >= 500;
})

console.log(ArticulosBaratos )