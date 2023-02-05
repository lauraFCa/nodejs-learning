
// objeto literal

var pessoa = {
    nome: "José",
    sobrenome: "Assis",
    falar: function () {
        return "Meu nome é " + this.nome + " " + this.sobrenome;
    }
}

export default pessoa