import express from 'express'

// Imports para poder usar o __dirname no ECMAScript
// Erro dado anteriormente: 
// __dirname is not defined in ES module scope
import path from 'path'
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const port = 3000
var app = express()
app.use(express.static(__dirname+"/public"))

app.get('/', function(req, res){
    var conteudo = "<h1>Eletronicos</h1>"
    res.send(conteudo)
    console.log(req)
})

app.get('/time', function (req, res) {
    var responseText = 'Hello World!' + '\n'
    responseText += 'Requested at: ' + req.requestTime + ''
    res.send(responseText)
})

app.get('/smartphones', function(req, res){
    res.send("Categoria de Smartphones")
}) 

app.get('/tablets', function(req, res){
    res.send("Categoria de Tablets")
    console.log(req)
})

app.get('/pagina', function(req, res){
    res.send("<div class='pagina'> <h1> Uma pagina de testes, entrando com HTML em texto </h1> <p>Capaz que vai dar ruim :)</p> </div>")
})

app.listen(port,  function(){
    console.log(`Servidor ativo na porta ${port}`)
    console.log(`http://localhost:${port}/`)
})