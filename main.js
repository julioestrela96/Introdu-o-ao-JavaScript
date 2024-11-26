// Importa as funções dos outros arquivos
const soma = require('./soma.js');
const verificaTriangulo = require('./verificaTriangulo.js');
const calculadora = require('./calculadora.js');

// ** Atividade 1: Soma Aritmética **
console.log('--- Atividade 1: Soma Aritmética ---');
console.log(`Soma de 1 e 2: ${soma(1, 2)}`); // Saída: 3
console.log(`Soma de 3 e 2: ${soma(3, 2)}`); // Saída: 5

// ** Atividade 2: Verificação de Triângulo **
console.log('\n--- Atividade 2: Verificação de Triângulo ---');
console.log(`Lados 2, 2, 2: ${verificaTriangulo(2, 2, 2)}`); // Saída: equilateral
console.log(`Lados 3, 4, 5: ${verificaTriangulo(3, 4, 5)}`); // Saída: scalene
console.log(`Lados 0, 0, 0: ${verificaTriangulo(0, 0, 0)}`); // Saída: none

// ** Atividade 3: Calculadora **
console.log('\n--- Atividade 3: Calculadora ---');
console.log(`1 + 1 = ${calculadora(1, 1, '+')}`); // Saída: 2
console.log(`1 - 1 = ${calculadora(1, 1, '-')}`); // Saída: 0
console.log(`1 * 1 = ${calculadora(1, 1, '*')}`); // Saída: 1
console.log(`1 / 1 = ${calculadora(1, 1, '/')}`); // Saída: 1
console.log(`10 / 0 = ${calculadora(10, 0, '/')}`); // Saída: Erro: Divisão por zero
console.log(`5 ^ 3 = ${calculadora(5, 3, '^')}`); // Saída: Operador inválido
