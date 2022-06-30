var autos = []; //Lista donde se guardaran los objetos a medida que se creen 

function auto(marca, modelo, annio){ //Constructor de los autos 
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//Almacenan la informacion de cada auto
var marcas = ['Toyota', 'Ford', 'Chevrolet'];
var modelos = ['Hilux', 'Fiesta', 'Tracker']
var annios = [2020, 2010, 2018];

//En cada iteracion del ciclo se crea un uevo auto 
for (i=0; i<3; i++){ 
    var marca = marcas[i]
    var modelo = modelos[i]
    var annio = annios[i]

    autos.push(new auto(marca,modelo,annio))
}

//Muestra por pantalla los distintos objetos 
for (i=0; i<3; i++){
    console.log(autos[i])
}

console.log(autos[2].marca)