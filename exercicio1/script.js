// a e b
let nome
let idade
// c
console.log(typeof nome)
console.log(typeof idade)
// d ??

// e
nome = prompt("Qual é o seu nome?")
idade = Number (prompt("Qual é a sua idade?"))
// f
console.log(typeof nome)
console.log(typeof idade)
// Foram impressas duas strings, pois a pergunta do prompt está entre aspas e consequentemente as respostas vieram como textos. Vou fazer um Casting na idade, que mudará de String para Number.
// g
console.log("Olá",nome,", você tem",idade,"anos.")
// Fim do 1º exercício, deu tudo certo.
