// Função em JS é First Class Objects (Citizens)
// Higher-order function

// criar de forma literal
function fun1() { }

// armazenar em uma variável
const fun2 = function() { }

// armazenar em array
const array = [function(a, b) { return a + b}, fun1, fun2]
console.log(array[0](2,3))

// armazenar em atributo de objeto
const obj = {}
obj.falar = function() { return 'Opa'}
console.log(obj.falar())

// passar função como parâmetro para outra
function run(fun) {
    fun()
}

run(function() { console.log('Executando...') })

// retornar/conter outra função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(5)