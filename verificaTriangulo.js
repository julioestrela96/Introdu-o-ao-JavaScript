// Função para verificar e classificar triângulos
function verificaTriangulo(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0 || (a + b <= c) || (a + c <= b) || (b + c <= a)) {
        return 'none'; // Não é um triângulo
    }

    if (a === b && b === c) {
        return 'equilateral'; // Todos os lados iguais
    } else if (a === b || a === c || b === c) {
        return 'isosceles'; // Dois lados iguais
    } else {
        return 'scalene'; // Todos os lados diferentes
    }
}

// Exporta a função
module.exports = verificaTriangulo;
