let dividir =  function(a,b){
    let division = a/b;
    if (b === 0){
        return 'No se puede dividir por 0'
    }else{
        return division
    }
}
module.exports = dividir;