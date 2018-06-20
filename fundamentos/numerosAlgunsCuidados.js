//Não dá exceção, mas retorna Infinity
console.log(7 / 0)
//Acaba convertendo a string para número porque é possível
console.log("10" / 2)
//Concatena (não soma certo)
console.log('3' + 2)
//Não é possível
console.log("Show!" * 2)
//Problema de precisão para otimizar
console.log(0.1 + 0.7)

//Não funciona
//console.log(10.toString())
//Funciona
console.log((10.345).toFixed(2))