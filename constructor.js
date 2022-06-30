//Funciones constructoras
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var auto1 = new auto('Tesla', 'Model 3', 2020);


console.log(auto1)

var a2 = new auto('Ferrari','F1',2022);
var a2 = new auto('Ferrari','488',2022);
var a2 = new auto('Ferrari','Spider',2022);
