// a)
let temCarro = prompt("Você tem carro?")
let temPets = prompt("Você tem algum pet?")
let temFaculdade = prompt("Você fez faculdade?")
// b)
console.log("Você tem carro?",temCarro)
console.log("Você tem algum pet?",temPets)
console.log("Você fez faculdade?",temFaculdade)
// c)
let perguntaCarro = "Você tem carro?"
let perguntaPet = "Você tem algum pet?"
let perguntaFaculdade = "Você fez faculdade?"
// d)
let respostaCarro = prompt(perguntaCarro)
let respostaPet = prompt(perguntaPet)
let respostaFaculdade = prompt(perguntaFaculdade)
// e)
console.log(perguntaCarro, respostaCarro);
console.log(perguntaPet, respostaPet);
console.log(perguntaFaculdade, respostaFaculdade);

//Comentário sobre o que acredito que aprendi neste exercício: Na parte a) e b) do exercício, eu mesmo tive que escrever as perguntas entre aspas no console.log antes das respostas que o usuário dará pelos prompts. Se eu não fizesse isso, o Console apenas mostraria as respostas cruas, Sim e Não. Já na segunda parte do exercício, criamos duas variáveis, e diferente da primeira parte que fizemos a pergunta direto como texto (variável e prompt juntos), agora fizemos a pergunta apenas como variável, e a resposta é uma segunda variável, na qual linkamos o prompt com a variável da pergunta. Concluindo, a vantagem neste segundo modelo é que no momento de fazermos a impressão, basta colocarmos o nome das duas variáveis no log, que teremos a pergunta e a resposta impressas sem a necessidade de reescrever a String, como fizemos na primeira parte.   
