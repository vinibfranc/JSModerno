//Objeto: coleção de chaves e valores
//Criação de chaves dinamicamente
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

//Notação literal de objetos
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

//JSON
'{ "nome": "Camisa Polo", "preco"= 79.90} '

console.log(prod2)