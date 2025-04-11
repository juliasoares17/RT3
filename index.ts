import {Somador, Subtrador, Multiplicador, Divisor} from 'modulo-rt3'

var soma = new Somador
var subtracao = new Subtrador
var multiplicacao = new Multiplicador
var divisao = new Divisor
const num1 = 10;
const num2 = 5;
const num3 = 6;
const num4 = 12;

console.log(`Testes de Cálculo\n
Soma:
5 + 10 = ${soma.calcular(num1, num2)}
12 + 6 = ${soma.calcular(num3, num4)}\n
Subtração:
10 - 5 = ${subtracao.calcular(num1, num2)}
12 - 6 = ${subtracao.calcular(num4, num3)}\n
Multiplicação:
10 x 5 = ${multiplicacao.calcular(num1, num2)}
12 x 6 = ${multiplicacao.calcular(num4, num3)}\n
Divisão:
5 / 10 = ${divisao.calcular(num2, num1)}
12 / 6 = ${divisao.calcular(num4,num3)}`)