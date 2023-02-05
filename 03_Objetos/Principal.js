import Carro from "./Carro.js"
import pessoa from "./Pessoa.js"

var carro1 = new Carro("Ford", "Fiesta", "flex", 30000, "extra");
var carro2 = new Carro("Fiat", "Uno", "gasolina", 25000, "extra");

console.log(carro1)
console.log(carro2)

console.log("\nmodelo do carro1 = " + carro1._valorPrivado)

// console.log("método 'Buzinar' do carro1 = \n" + carro1.buzinar())
console.log("\nmétodo 'Buzinar' do carro1 = \n" + carro1.buzinar(carro1.modelo))

console.log("\nvariavel local = " + carro1.extra)
// console.log("metodo local - Ligar" + carro1.ligar())
//TypeError: carro1.ligar is not a function

console.log("\n\nacessando variavel privada:\n" + carro1.acessarPrivado() +"\n")

console.log(pessoa)