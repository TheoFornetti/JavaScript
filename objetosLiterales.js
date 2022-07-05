//Un objeto es una estructura de datos que puede contener propiedades y metodos
    //Propiedades: Definimos el nombre de la propiedad, son caracteristicas
    // : Separa la propiedad del valor
    // Valor: Es la caracteristica que es almacenada en la propiedad
    //metodos: so acciones que puede realizar el objeto


let curso = {
    cantidadAlumnos : 32,
    profesores: ['Theo', 'Julia'],
    horario: 'de 19 a 20hs',
    notificaciones:function(){
        return 'El cursado es de ' + this.horario;
    }

}

//Constructor, nos permite crear objetos con mayor rapidez
function Curso(cantidadAlumnos, profes, Horario){
    this.numeroAlumnos = cantidadAlumnos,
    this.profesores = profes;
    this.horario = Horario;
}

let cursoMarketing = new Curso(32, ['Pedro', 'Juan'], 'de 20 a 23');

console.log(cursoMarketing)

//Ejemplos 
//Crear un objeto literal 

let Perro = {
    nombre: 'Pepo',
    edad: 3,
    vacunado: true
}

//console.log(Perro)

//Crear Deportista

let Deportista = {
    nombre: 'Carlos Sainz',
    energia: 300,
    experiencia: 10,
    menosEnergia : null,
    experienciaTotal : null,

    entrenar:function(horas){
        var menosEnergia = horas*5;
        var experienciaTotal = horas*2;
        this.energia = this.energia - menosEnergia;
        this.experiencia = this.experiencia + experienciaTotal;
        let mensaje = 'El resultado del entrenamiento fue experiencia = ' + this.experiencia + ' aumento en ' + experienciaTotal  + ' y quedan ' + this.energia + ' puntos de energia. La energia disminuyo en ' + menosEnergia + ' puntos'
        return mensaje;
    }
       
    
    
}

console.log(Deportista.entrenar(2));

