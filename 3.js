function operar (a, b, operacaoCallback) {
    return operacaoCallback(a, b);
}

function somar (x, y) {
    return x + y
}

function multiplicar (x, y) {
    return x * y
}

const soma = operar(10, 4, somar)

const multiplicacao = operar(10, 4, multiplicar)

console.log (soma)
console.log (multiplicacao)