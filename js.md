# Javascript

## Comentário de linha

```javascript
/*
  Bloco
  de
  Comentário
*/
```

## Variáveis em JS

// JS é case-sensitive
// lowerCamelCase para variáveis

var minhaVariavel = 1;

// ES6 -> let e const
// Não podem ser redeclarada
// Deve ser declaradas antes do uso
// Block Scope (se dentro de {}, não pode ser acessada fora)

let minhaOutraVariavel = 2;

// const não pode ter seu valor reatribuído (referência do valor)
// minhaConstante = 0 -> TypeError
// Mas os elementos do valor (Array e Object) podem ser alterados
const minhaConstante = {
  elemento: minhaVariavel
};
minhaConstante.elemento = minhaOutraVariavel;

// const deve ser inicializada na sua declaração
// Sempre usar const, a menos que soubermos que seu valor vai mudar
// Sempre usar const quando declarar Array, Objetc, Function ou RegExp

// Hoisting: Declarações são enviadas para o topo do seu escopo
// var é inicializada depois do hoisting como undefined
// let e const não serão incializadas, devolvendo erro
// Inicializações não sofreram hoisting

/* Tipo de dados */

// JS é dinamicamente tipado

// String
let x = 'Text'
x = "Text"
x = `Text`
const copo = "d'água" // Variar aspas simples e duplas a depender do texto desejado
const copo = 'd\'água' // Backslash permite utilizar caracteres especiais, inclusive ele mesmo
const codigosEspeciaisComBackslash = "\b backspace \n new line...."
const stringGrande = "textos muito graaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaandes \
podem ter quebra de linha no arquivo js com backslash"
const STRING_ERRADA_NUNCA_FAZER = new String('meu texto') // Não tem o mesmo tipo que o literal
let x = 'Text'
x.length // Return 4
x.slice(1, 3) // Return 'ex', primeiro é inclusivo, segundo é exclusivo
x.substr(1, 3) // Return 'ext'
const x = 'Samuel Morrissey'
x.replace('Morrissey', 'de Lima') // Return 'Samuel de Lima', troca somente o primeiro!
const x = 'Samuel Morrissey MORRISSEY'
x.replace('MORRISSEY', 'de Lima') // Return 'Samuel Morrissey de Lima', replace é case-sensitive
const x = 'Samuel Morrissey MORRISSEY'
x.replace(/Morrissey/ig, '!') // RegExp i para case-insensitive e g para global match
const x = 'Samuel MORRISSEY de Lima'
x.toUpperCase() // Return 'SAMUEL MORRISSEY DE LIMA'
x.toLowerCase() // Return 'samuel morrissey de lima'
const samuel = "Samuel"
const morrissey = "Morrissey"
const lima = "de Lima"
const nomeCompleto = samuel + " " + morrissey + " " + lima
const nomeCompleto = samuel.concat(" ", morrissey, " ", lima) // Equivalente 
const x = "       Samuel     Morrissey       "
x.trim() // Return 'Samuel     Morrissey'
const x = "Morrissey" // length 9
x.padStart(12, '-') // Coloca '-' no início até atingir length 12
const x = "Morrissey" // length 9
x.padEnd(12, '!') // Coloca '!' no final até atingir length 12
const x = "Morrissey"
x.charAt(2) // Return 'r'
x.charCodeAt(2) // Return 114
x[2] // Return 'r'
const x = "Morrissey,Morrissey,Morrissey"
x.split(",") // Return ['Morrissey', 'Morrissey', 'Morrissey']
const x = "Meu texto muito muito importante"
x.indexOf('muito', 2) // Return 10, recebe um segundo argumento facultativo da posição do inicio da pesquisa
x.lastIndexOf('muito') // Return 16
x.search(/muito/i) // Return 10, permite RegExp
x.match(/muito/g) // Retorna array com todos as ocorrências que combinal com o RegExp
x.includes('text') // Return true
x.startsWith('Meu') // Return true
x.endsWith('importante') // Return true


// Number
x = 10
x = 20.5
x = 50e5  // 5000000
x = 50e-5 // 0.00050

// Boolean
x = true
x = false

// Array
const lista = [123, 'Texto', false]

// Object
const objeto = {
  primeiroNome: 'Samuel',
  segundoNome: 'Morrissey',
  nomeCompleto: function () {
    return this.primeiroNome + this.segundoNome
  }
}

const primeiroNome = objeto.primeiroNome
const segundoNome = objeto['segundoNome']
const nomeCompleto = objeto.nomeCompleto()

// Undefined e Null
let x; // x é undefined. Foi declarado mas não foi inicializado
let x = null; // x é null. Foi inicializado mas com valor nulo


/* Operadores */

/* Matemáticos */

// Adição +
// Subtração -
// Multiplicação *
// Divisão /
// Exponenciação **
// Resto da divisão %
// Incremento ++
// Decremento --

// Atribuição = 
// x += y -> x = x + y (serve com qualquer operador)

/* Concatenação */

let nome = "Samuel"
let idade = 25
let fraseDoNome = "Meu nome é " + nome
let nomeComIdade = `${fraseDoNome} e eu tenho ${idade} anos.`

/* Comparação */

// ==     Igual a
// ===    Valor e tipo igual
// !=     Diferente de
// !==    Valor ou tipo diferente
// >      Maior que
// <      Menor que
// >=     Maior ou igual
// <=     Menor ou igual
// ?:     Operador ternário
// ??     Coalescência nula

/* Operadores lógicos */

// &&   AND
// ||   OR
// !    NOT

/* Operadores de tipo */

// typeof       Retorna o tipo 
// instanceof   Retorna true se a instancia for do tipo do outro objeto  

/* Operadores binários (vou ficar devendo kk) */

/* Funções */

function minhaFuncao(parametro1, parametro2) {
  let variavelLocal = 10;
  return variavelLocal // Não obrigatório. Atingir return no meio da execução interrompe a função.
}

const minhaFuncao = function (parametro1, parametro2) { // Sintaxe equivalente
  let variavelLocal = 10;
  return variavelLocal
}

minhaFuncao(123, 'string')

/* Eventos HTML */

// HTML permite código JS em atributos de eventos que serão executados quando o evento for disparado.
// <button onClick="this.innerHTML = Date()">The time is?</button>



