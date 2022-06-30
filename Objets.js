//Sintaxis creacion de objetos
var objeto = {
    marca: "Toyota",
    modelo: "Hilux",
    annio: 2022,
    Detalle: function(){
        console.log("El modelo es: " + this.modelo + "  del annio " + this.annio)
    }
}

objeto.Detalle();