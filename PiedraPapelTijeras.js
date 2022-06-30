var piedra = 1
var papel =2 
var tijera =3 

var manoJugador= 1;




function ManoComputadora(){
    var manoComputadora;
    var aleatorio=Math.floor(Math.random()*3);
    if (aleatorio===0){
        manoComputadora=1;
        return manoComputadora;
    }
    else if(  aleatorio===1){
        manoComputadora = 2;
        return manoComputadora;
    }
    else if (aleatorio===2){
        manoComputadora=3;
        return manoComputadora;
    }
    
}
var mc = ManoComputadora();


function TransformarValoresJ(j){
    if (j==1){
        manoJugador='Piedra'
    }
    else if (j==2){
        manoJugador='Papel'
    }
    else if (j==3){
        manoJugador='Tijeras'
    }
    
}

function TransformarValoresCompu(c){
    if (c==1){
        mc='Piedra'
    }
    else if (c==2){
        mc='Papel'
    }
    else if (c==3){
        mc='Tijeras'
    }
    
}


function Jugar(){
    if (manoJugador === mc){
        return console.log('Es un empate, ambos sacaron ' + mc)
    }
    else if (manoJugador == 'Piedra' && mc == 'Tijeras' ){
        console.log ('Gano el Jugador')
    }
    else if (manoJugador == 'Piedra' && mc == 'Papel' ){
        console.log ('Gano la computadora')
    }
    else if (manoJugador == 'Papel' && mc == 'Tijeras' ){
        console.log ('Gano Computadora')
    }
    else if (manoJugador == 'Papel' && mc == 'Piedra' ){
        console.log ('Gano el Jugador')
    }
    else if (manoJugador == 'Tijera' && mc == 'Papel' ){
        console.log ('Gano el Jugador')
    }
    else if (manoJugador == 'Tijera' && mc == 'Piedra' ){
        console.log ('Gano la Compu')
    }
    
}





TransformarValoresJ(manoJugador)
TransformarValoresCompu(mc)
console.log(mc)
Jugar()


