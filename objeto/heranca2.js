// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 'A' // não faça isso em casa
const avo = { attr1: 'B' }
const pai = { __proto__: avo, attr2: 'C', attr3: 'D' }
const filho = { __proto__: pai, attr4: 'E' }

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3, filho.attr4)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        }else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} km/h de ${this.velMax} km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo} km/h de ${super.status()} km/h`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(300)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())