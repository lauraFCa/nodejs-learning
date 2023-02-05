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
app.set("views", "views")

var myLogger = function (req, res, next) {
    console.log('LOGGED') //imprime “LOGGED” quando uma solicitação para o aplicativo passa por ela
    next()
    //A chamada desta função chama a próxima função de middleware no aplicativo. 
    //A função next() não faz parte do Node.js ou da API Express, mas é o terceiro argumento que é passado para a função de middleware. 
}

var requestTime = function (req, res, next) {
    var today = new Date()
    req.requestTime = today.toDateString()
    //data do request
    next()
}

app.use(myLogger, requestTime)

app.get('/', (req, res) => {
    var dia = new Date()
    var data = dia.toDateString()
    res.render('index', {data, dia});
});

app.get('/home', (req, res) => {
    res.render('home', {pessoas: pessoas});
});

app.listen(3000)

console.log("http://localhost:3000/")