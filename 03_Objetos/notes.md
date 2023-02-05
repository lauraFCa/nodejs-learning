# Objetos

Um objeto é uma estrutura de dados, que modela as características e/ou comportamentos de alguma coisa do mundo real.

<!-- - Características = atributos
- Comportamentos = métodos -->

![Exemplo de Objeto - Carro](../../../imgs/objetoCarro.png)

> Grandes aplicações são feitas de pequenos objetos.

Características são **variáveis**:

```
var marca = "Ford";
var modelo = "Fiesta";
var combustivel = "flex";
var valor = 30000;
```

Comportamentos são **funções**:

```
function ligar() {
 return "Vrum";
}

function buzinar(){
 return "Bibi";
}
```

**Pra que serve?**  
Se eu tenho uma lista de carros, todos eles tem os mesmos atributos (características).  
Todos tem: **modelo**, **cor**, **marca**, **valor**, etc.

Criando então um **objeto _Carro_**:

```
function Carro(marca, modelo, combutivel, valor) {
    this.marca = marca;
    this.modelo = modelo;
    this.combutivel = combutivel;
    this.valor  = valor ;

    this.ligar = function () {
        return "Vrum";
    }

    this.buzinar = function (nomeDoModelo){
        return nomeDoModelo + " passando.";
    }
}
```
>Neste objeto nenhum valor foi passado - as características e funções foram apenas definidas!

A função que cria o objeto carro é chamada de *função construtora*

Posso precisar acessar uma variável de um objeto em outro.  
Por exemplo: Nota ficar recebe dados de um objeto Carro

Criando o objeto da forma apresentada, tudo nele será público (propriedades e métodos).
>this.marca = marca;  
this.buzinar()

É possível proteger esses elementos para que não sejam acessáveis publicamente.
1. Declarando como variável local (sem o *this*):  
var *extra* = extra;  
function *ligar*()
2. Declarando como propriedade privada:  
const *_valorPrivado* = extra

A variável ao ser acessada retorna como *undefined* mas o método gera um erro na execução, pois não é considerado uma *função*!

Para acessar a variável privada basta criar um método publico que retorne esse valor:  
>this.acessarPrivado = function() {  
    return _valorPrivado  
}

