
let carro = {
    "placa": "xyz-7070",
    "modelo": "corsa",
    "ano": 2010
}

let pessoa = {
    "nome": "zezin",
    "idade": 15,
    "altura": 1.59,
    "peso": 80,
    "myCarro": carro,
    imc () { return this.altura / this.peso ** 2 }
}

//diferenca vetor VS objeto
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.imc())
console.log(pessoa.myCarro.ano)