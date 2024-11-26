// Função da calculadora
function calculadora(a, b, operador) {
    switch (operador) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b === 0 ? 'Erro: Divisão por zero' : a / b;
        default:
            return 'Operador inválido';
    }
}

// Exporta a função
module.exports = calculadora;
