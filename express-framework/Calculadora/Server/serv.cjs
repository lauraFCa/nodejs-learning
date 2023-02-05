const express = require('express')

// declaracao do Express
var app = express()
// definicao da porta de execucao
var port = 3000

// definicao dos arquivos View (paginas)
app.set("view engine", "ejs")
app.set("views", "")

// requisicao GET
app.get('/', (req, res) => {
    res.render('pagina')
})

// execucao do programa
app.listen(port, function () {
    console.log(`http://localhost:${port}/`)
})
