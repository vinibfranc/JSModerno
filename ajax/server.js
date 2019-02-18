const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// servindo arquivos estáticos
app.use(express.static('.'))

// transformando dados
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './upload')
    },
    filename: function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.end('Ocorreu um erro...')
        }

        res.send('Concluído com sucesso.')
    })
}) 

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'ímpar'
    })

})

//app.get('/teste', (req, res) => res.send(new Date()))
app.listen(8080, () => console.log('Executando...'))