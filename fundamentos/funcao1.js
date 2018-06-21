//função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

//variações possíveis
console.log("==Sem retorno==")
imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(1, 2, 3, 4, 5, 6, 7)
imprimirSoma()

//função com retorno
function soma(a, b = 0) {
    return a + b
}

console.log("==Com retorno==")
console.log(soma(2, 3))
console.log(soma(2))