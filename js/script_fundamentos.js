//comentário de uma linha
/*
    Comentário de múltiplas linhas
    É possível ter várias
    linhas
*/
console.log("Olá Mundo")

//Declaração da variável
let num = 10
var num2 = 2
const num3 = 100


console.log(num)
console.log(num2)
console.log(num3)


if (true){
    let num4 = 250
    console.log(num4)

    var num5 = 140
}

console.log(num5)

num = 1882

console.log(num)

num2 = 58

//Concatenação
console.log('Valor da variável num3 é ' + num3)
console.log("Valor da variável num3 é " + num3)
console.log(`Valor da variável num3 é ${num3}`)

//operadores matemáicos
/*  + soma
    - subtração
    * múltiplicação
    / divisão
    % módulo
*/

console.log('A soma dos números é:', 12+ 8)
console.log('A subtração entre as variáveis:', num2 - num3)
console.log('A múltiplicação dos números:', num2 * 5)
console.log('A divisão entre os valores:', num3/num2)
console.log(`O resto da divisão entre 10 e 2 é ${10%2}`)

//Operadores Relacionais ou Comparação

/*
    > Maior
    < Menor
    >= Maior Igual
    <= Menor Igual
    != Diferente
*/

//Operadores lógico

/*
    && e
    || ou
*/

//Teste lógico (seleção)
let idade = 50

if(idade >= 18){
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}

idade >= 18 ? console.log("Maior de idade") : console.log("Menor de idade")

/*
    Renovação da CNH
    18 até 49 -> 10 anos
    50 até 60 -> 5 anos
    70 acima -> 3 anos
*/

