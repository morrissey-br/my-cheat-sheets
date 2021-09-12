

// JSX
const elemento = <h1>Hello World</h1>
const elemento2 = (
  <div>
    <h1>Hello World 2</h1>
  </div>
)

// JSX representa objetos. Babel compila JSX para React.createElement()
const elemento = <h1 className='nome-da-classe'>Hello</h1>
const elementoEquivalente = React.createElement(
  'h1',
  {className: 'nome-da-classe'},
  'Hello'
)

// Injetar expressões no JSX
const nome = "Morrissey"
const elemento = <h1>Hello, {nome}</h1>
const elemento2 = <h1>Resultado: {2 + 2}</h1>
const elemento3 = <div>{elemento}</div> // JSX também é uma expressão

// React, por padrão, protege injeção de código malicioso
const input = response.potentiallyMaliciousInput;
const element = <h1>{input}</h1> // É seguro fazer isso!

// Atributos com JSX
const tipo = "text"
const placeholder = "Digite algo..."
const elemento = <input type={tipo} placeholder={placeholder}/>

// Usamos camelCase para atributos de nome composto
// Alguns nomes mudaram do HTML para o JSX por conta de compatibilidade com JS
const elemento = <h1 className='nome-da-classe'>Hello</h1>

// Renderizando JSX
ReactDOM.render(
  elemento,
  document.getElementById('app') // No nosso HTML, definimos uma div com id "app"
  )
// Obs.: Elementos React são imutáveis. A única forma de auterá-lo é
// criar um novo elemento e passar em ReactDOM.render().
// Caso isso aconteça, o React compara o novo elemento e seus filhos
// com o elemento anterior, atualizando somente o que foi diferente.

/* Componentes e props */


