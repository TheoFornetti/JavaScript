var estudiantes = ["Maria", "Rosa", "Sebastian", "Theo"];
function Saludar(estudiantes){
    console.log('Hola ' + estudiantes)
}

while(estudiantes.length > 0){
    console.log(estudiantes)
    var estudiante = estudiantes.shift();
    Saludar(estudiante);
}