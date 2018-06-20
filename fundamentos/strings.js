const escola = "Cod3r"

console.log(escola.charAt(4))

//Não achou, então não gera erro... Só não impprime nada
console.log(escola.charAt(5))
//Retorna Unicode de 3 --> 51
console.log(escola.charCodeAt(3))
//Índice em que está o caracter
console.log(escola.indexOf('3'))
//Substring
console.log(escola.substring(1))
console.log(escola.substring(0, 3))
//Concat
console.log('Escola'.concat(escola).concat("!"))
//Replace com REGEX
console.log(escola.replace(/\d/, 'e'))
console.log(escola.replace(/\w/g, 'e'))
//Transforma em array
console.log('Ana, Maria, Pedro'.split(','))