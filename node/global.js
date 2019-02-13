// console.log(global)

// todos os arquivos terão acesso a MinhaApp
global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema Legal'
})