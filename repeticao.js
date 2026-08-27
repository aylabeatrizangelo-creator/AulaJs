/*
VALIDACAO SENHA
const senhaCorreta = "148supersenha"
let tentativa = ""

while (tentativa != senhaCorreta) {
    tentativa = prompt("Digite a senha: ")
    if (tentativa === senhaCorreta) {
        alert("Senha correta! Acesso liberado.")
    } else {
        alert("Senha incorreta. Tente novamente.")
    }
}


EXERCICIO:
let soma = 0 
let numero = 0
while (soma <= 100){
numero = Number(prompt("Digite um numero"))
soma = soma + numero
}
alert("A soma de todos os numeros digitados foi igual a: " + soma)

*/
const numeroSecreto = Math.floor( Math.random()* 10) + 1;
let palpite
let tentativas = 0
alert("Adivinhe o numero entre 1 e 10.")
do{
    // alert(" Math.floor(Math.ramdom()*10) + 1")
    palpite = Number(prompt("Seu palpite"))
    tentativas++

    if (Number.isNaN(palpite))
        alert("Digite um numero valido.")

    else if (palpite == numeroSecreto) {
        alert ("VOCE ACERTOU!")
    } else if(palpite < numeroSecreto){
        alert("Muito baixo! Tente novamente.")
    }else if (palpite > numeroSecreto )
        alert("Muito alto! Tente novamente.")
   }   while(palpite !== numeroSecreto)
    
    


