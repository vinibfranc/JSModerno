const a = {name: 'Teste'}
const b = a
b.name = 'Opa'
//a recebe mudança de b
console.log(a)

let c = 3
let d = c
d++
//c não muda
console.log(c)
console.log(d)