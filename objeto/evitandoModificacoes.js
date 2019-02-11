// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Quaquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível?', Object.isExtensible(produto))

// não vai adicionar!
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
// mas vai deletar!
delete produto.tag

console.log(produto)

// Object.seal --> não pode adicionar nem deletar, só modificar
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)

console.log('Selado? ', Object.isSealed(pessoa))

// não vai alterar!
pessoa.sobrenome = 'Silva'
delete pessoa.nome

// vai alterar!
pessoa.idade = 29

console.log(pessoa)

// Object.freeze = selado + valores constantes