// Exercício 3
// Este programa deve perguntar à pessoa colaboradora:
// a) Nome completo
let nomeCompleto = prompt("Qual é o seu nome completo?")
console.log("Nome completo:",nomeCompleto);
// b) Data de nascimento (utilize as / )
const dataDeNascimento = prompt("Qual é a sua data de nascimento? Insira no formato dd/mm/aaaa")
console.log("Data de nascimento:",dataDeNascimento);
// c) Endereço
let endereco = prompt("Qual é o seu endereço?")  
console.log("Endereço:",endereco)
// d) CPF
const cpf = Number (prompt("Informe o número do seu CPF"))
console.log("CPF:",cpf)
// e) Escolaridade
let escolaridade = prompt("Qual é a sua escolaridade?")
console.log("Escolaridade:",escolaridade)
// f) Possui CHN?
const cnh = Number (prompt("Você possui CNH? Se sim, digite o número."))
console.log("CNH:",cnh)
// g) Quantos filhes possui?
let quantosFilhos = Number (prompt("Você possui quantos filhos?"))
console.log("Quantidade de filhos:",quantosFilhos)
// h) Cargo atual
let cargoAtual = prompt("Qual é o seu cargo atual?")
console.log("Cargo atual:",cargoAtual)
// i) Salário
let salario = Number (prompt("Qual é o seu salário atual?"))
console.log("Salário:",salario)
// j) Recebe comissão? Se sim, aperte em confirme, caso não, clique em cancel
let recebeComissao = confirm("Você recebe comissão?")
console.log("Recebe comissão? Sim=true|Não=false:",recebeComissao)
// k) Informe o ano de admissão
const anoAdmissao = Number (prompt("Em qual ano foi a sua admissão?"))
console.log("Ano da admissão:",anoAdmissao)

// no código acima temos concluído a realização dos passos 1, 2 e 4.

// agora abaixo finalizamos o exercício com a realização do passo 3
// Imprima no console o tipo de todas as variáveis.

console.log("Nome String",typeof nomeCompleto);
console.log("Nascimento String",typeof dataDeNascimento);
console.log("Endereço String",typeof endereco);
console.log("CPF Number",typeof cpf);
console.log("Escolaridade String",typeof escolaridade);
console.log("CNH Number",typeof cnh);
console.log("Filhos Number",typeof quantosFilhos);
console.log("Cargo String",typeof cargoAtual);
console.log("Salário Number",typeof salario);
console.log("Comissão Boolean",typeof recebeComissao);
console.log("Ano admissão Number",typeof anoAdmissao);