// mesmo valor nos dois
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// muda valor, pq usou factory
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)

