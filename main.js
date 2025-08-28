function Numero(numero){
    this.numero = numero;
    this.declaraNumero =  function(){
        console.log("o numero é " + this.numero);
    }
}

function Analise(numero, paridade, digitos){
    this.paridade = paridade;
    this.digitos = digitos;
    Numero.call(this, numero);
    this.parOuImpar = function(){
        console.log(this.numero + " é " + this.paridade);
    }
    this.contagem = function(){
        console.log(this.numero + " tem " + this.digitos + " dígitos");
    }
}

function Metade(numero){
    Numero.call(this, numero);
    this.metade = function(){
        const half = this.numero / 2;
        console.log(`a metade de ${this.numero} é ${half}`);
    }
}

function Dobro(numero){
    Metade.call(this, numero)
    this.dobro = function(){
        const double = this.numero * 2;
        console.log(`o dobro de ${this.numero} é ${double}`);
    }
}

const primeiroNumero = new Numero(23);
const segundoNumero = new Metade(23);
const terceiroNumero = new Dobro(23);
const quartoNumero = new Analise(23, "ímpar", 2);
console.log(primeiroNumero instanceof Numero);
console.log(segundoNumero instanceof Metade);
console.log(terceiroNumero instanceof Dobro);
primeiroNumero.declaraNumero();
segundoNumero.metade();
terceiroNumero.dobro();
quartoNumero.parOuImpar();
quartoNumero.contagem();