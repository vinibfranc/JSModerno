// estrutura não indexada e que não aceita repetição
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthias')
times.add('Flamengo')
// não vai add
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))

times.delete('Flamengo')
console.log(times.has('Flamengo'))


