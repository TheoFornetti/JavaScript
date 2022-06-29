//Es una forma en que una tarea pueda repetirse sin necesidad de hacerlo de forma manual 
//Mientras se cumpla una condicion este loop va a seguir repitiendoce 

var estudiantes = ["Maria", "Sergio", "Theo", "Taza"]

function saludarEstudiantes(estudiantes){
    console.log("Hola " + estudiantes)
}

for (var i = 0; i < estudiantes.length; i++){
    console.log(saludarEstudiantes(estudiantes[i]));
}