import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
var app = express()
var port = 3000

app.use(bodyParser.json())  // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs")
app.set("views", path.join("Calculadora", "Views"))
// para usar o CSS:
app.use(express.static(path.join(__dirname, "..", "Style")));

app.get('/', (req, res) => {
    res.render('template', {
        page: "index",
        calcPage: "http://localhost:3000/calculadora",
        jason: "http://localhost:3000/jason",
        imc: "http://localhost:3000/imc"
    })
    console.log("Caminho do CSS: \n" + path.join(__dirname, "..", "Style"))
})

app.get('/calculadora', (req, res) => {
    res.render('template', { page: "calculadora", pagina: "http://localhost:3000/" })
})

app.listen(port, function () {
    console.log(`http://localhost:${port}/`)
})


app.post('/resp', function (req, res) {
    console.log(req.body)
    let num1 = parseFloat(req.body.nota1)
    let num2 = parseFloat(req.body.nota2)

    res.render('template', {
        page: "response",
        resp: num1 + num2,
        pagina: 'http://localhost:3000/calculadora'
    })

})

app.get('/jason', function (req, res) {

    res.render('template', {
        page: "jsonResponse",
        objeto: JSON.stringify({ objeto: objetoCarro }, null, 3),
        pagina: 'http://localhost:3000/jason'
    })
    //res.json({ objeto: objetoCarro });
})

app.param('nome', function(req, res, next, name){
    req.nome = name
    next()
})

app.get('/imc', (req, res) => {
    res.render('template', { page: "imc", pagina: "http://localhost:3000/", nome : null, resultado: null })
})

app.get('/imc/:peso/:altura/', (req, res) => {
    // res.send("Hello " + req.nome)
    const oNome = req.query.nome
    // request.body.peso = req.params.peso
    // request.body.altura = req.params.altura
    let pes = parseFloat(req.params.peso)
    let alt = parseFloat(req.params.altura)
    let IMC = pes / (alt*alt)
    res.render('template', { page: "imc", pagina: "http://localhost:3000/", nome: oNome, resultado: IMC })
})


app.listen(port, function () {
    console.log(`http://localhost:${port}/`)
})
