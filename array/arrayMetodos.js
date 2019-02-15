const pilotos = ['Vettel', 'Alonso', 'Raikonnen', 'Massa']
console.log(pilotos)

pilotos.pop() // Massa saiu!
console.log(pilotos)

pilotos.push('Verstappen') // Verstappen entrou! 
console.log(pilotos)

pilotos.shift() // remove o primeiro (Vettel) 
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona na primeira posição
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // Massa vai sair
console.log(pilotos)

// fatiar array
const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)




