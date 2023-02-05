
// function Carro(marca, modelo, combutivel, valor) {
class Carro {
    constructor(marca, modelo, combutivel, valor, extra) {
        this.marca = marca;
        this.modelo = modelo;
        this.combutivel = combutivel;
        this.valor = valor;
        var extra = extra; // variavel local, privada
        const _valorPrivado = extra

        function ligar (){ // metodo privado
            return "Ligou";
        };

        this.buzinar = function (nomeDoModelo) {
            return nomeDoModelo + " passando.";
        };

        this.acessarPrivado = function(){
            return _valorPrivado
        }
    }
}

export default Carro