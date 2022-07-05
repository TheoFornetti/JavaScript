//Sirve para guardar mucha informacion en una sola variable, un arreglo es una lista de cosas. Estos estan ordenados en indices
let nombres = ['theo']

//Intoduce valores al final del array
nombres.push('Julia')


console.log(nombres)

//Pop, quita valores al final del array y lo devuleve
let hermosa = nombres.pop()

console.log(hermosa)
console.log(nombres)

//Shift, sacara del array el elemnto del indice 0, es decir el primero
nombres.shift()

console.log(nombres)

nombres.push('Marcelo')

//Unshisft inserta uno o mas datos al inicio del array 

nombres.unshift('Theo')

console.log(nombres)

//Index of y last index of muestra el donde se encuentran ele elemnto buscado dentro del array. Si no est devuelve un -1

console.log(nombres.indexOf('Marcelo'))

nombres.push('Theo')

console.log(nombres.lastIndexOf('Theo'))


