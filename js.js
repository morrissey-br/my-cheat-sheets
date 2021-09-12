// Comentário de linha

/*
  Bloco
  de
  Comentário
*/

/* Variáveis em JS */

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
  segundoNome: 'Morrissey'
}

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






