import express from 'express'

var pessoas = [
    {
        'nome': 'Paulo',
        'idade': 12
    },
    {
        'nome': 'Jõao',
        'idade': 15,
    },
    {
        'nome': 'Marina',
        'idade': 25,
    }
]

var app = express()

app.set("view engine", "ejs")
app.set("views", "")


app.get('/', (req, res) => {
    res.render('index', {pessoas: pessoas})
})

app.get('/home', (req, res) => {
    var now = new Date()
    var data = now.toDateString()
    var dia = now.getDate()
    var mes = now.getMonth()+1
    var ano = now.getFullYear()
    res.render('home', {data, dia, mes, ano, now})
})


app.get('/teste', (req, res) => {
    res.render('template', {page: "teste"})
})

app.listen(3000)

console.log("http://localhost:3000/")