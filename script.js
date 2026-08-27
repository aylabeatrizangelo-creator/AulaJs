/*
NIVEL BASICO
1 - Crie um programa que solicite a idade de uma pessoa e informe se ela e de maior de idade (18 anos ou mais) ou menor de idade.
const idade = Number(prompt("Digite sua idade"))
if (idade <= 18) {
    console.log("Voce e menor de idade!")
} else {
    console.log("Voce e maior de idade!")
}

2 - Peça ao usuario a nota final de um aluno (de 0 a 100). Caso a nota seja 60 ou maior, informe que ele foi aprovado. Caso contrario, informe que foi reprovado
const numero = Number(prompt("Digite um numero:"))
if (numero >= 1) {
    console.log("O numero e positivo")
} else {
    console.log("O numero e negativo")
}

3 - Peça ao usuario a nota final de um aluno (0 a 100). Caso a nota seja  60 ou maior, informe que ele foi aprovado.
const nota = Number(prompt("Digite sua nota:"))
if (nota >= 60) {
    console.log("Voce foi aprovado!")
} else {
    console.log("VOCE FOI REPROVADO!")
}

4 - Leia um numero informado pelo usuario e indique se ele e positivo,negativo ou 0.
const numero = Number(prompt("Digite um numero:"))
if (numero > 0) {
    console.log("Numero positivo")
} else if (numero < 0) {
    console.log("Numero negativo")
}
else {
console.log ("Numero 0")
}
  
5-const idade = Number(prompt("Digite sua idade:"))
if (idade >=0 && idade <= 12) {
    console.log("Criança")
} else if (idade >=13 &&  idade >= 17) {
console.log("Adolecente")
}
else if(idade > 18) {
console.log("Voce e maior de idade.")
}
else {
console.log("Idade invalida")

}

6 - const numero = Number(prompt("Digite um numero:"))
if (numero %2 === 0) {
    console.log("O numero e par.")
} else {
    console.log("O numero e impar.")
}
NIVEL INTERMEDIARIO
2 - Solicite tres numeros diferentes ao usuario e informe qual deles e o maior.
const primeiro = Number(prompt("Primero numero:"))
const segundo = Number(prompt("Segundo numero:"))
const terceiro = Number(prompt("Terceiro numero:"))
if (a == b && b == c) {
    alert("Todos os numeros sao iguais")

} else if (a > b && c < a) {
    alert("O primeiro numero e maior")
}
else if (b > a && c < a) {
    alert("O segundo numero e maior")
}
else {
    alert("O terceiro numero e maior")
}

3. Desconto em compras
Uma loja oferece 10% de desconto para compras acima de R$ 100,00.
Solicite o valor da compra e informe o valor final que deverá ser pago.
Caso a compra não atinja esse valor, informe o preço sem desconto

const valorCompra = Number(prompt("Digite o valor da compra:"))
if (valorCompra > 100) {
    let final = valorCompra * 0.9
    alert("Pague R$" + final.toFixed(2) )

} else {
    alert("Sua compra de R$ " + valorCompra.toFixed(2) + " Nao teve desconto.")
}


4. Sistema de login
Crie um programa que solicite um nome de usuário e uma senha.
Considere que:
Usuário: admin 
Senha: 1234 
Caso ambos estejam corretos, exiba a mensagem "Login bem-sucedido". Caso contrário, exiba "Acesso negado".
const usuario = String(prompt("Usuario:"))
const senha = Number(prompt("Senha:"))
if (usuario !== admin && senha !== 1234) {
    alert("Acesso negado")
} else {
    alert("Login bem-sucedido")
}


NIVEL AVANCADO
1. Classificação de triângulos
Solicite ao usuário os comprimentos dos três lados de um possível triângulo.
Primeiro, verifique se os valores realmente podem formar um triângulo.
Caso possam, classifique-o como:
Equilátero (todos os lados iguais); 
Isósceles (dois lados iguais); 
Escaleno (todos os lados diferentes). 
Caso não seja possível formar um triângulo, informe isso ao usuário.

const primeiroLado = Number(prompt("Comprimento do primeiro lado:"))
const segundoLado = Number(prompt("Comprimento do segundo lado:"))
const terceiroLado = Number(prompt("Comprimento do terceiro lado"))
if (primeiroLado && segundoLado && terceiroLado !== 180) {
    
} else {
    
}

*/