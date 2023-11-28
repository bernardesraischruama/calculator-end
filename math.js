let valor1 = document.querySelector("#valor1").value;
let valor2 = document.querySelector("#valor2").value;
let soma = document.querySelector("#btSoma");
let subtracao = document.querySelector("#btSub");
let multiplicacao = document.querySelector("#btMult");
let divisao = document.querySelector("#btDiv");
let resultado = document.querySelector("#resultado");

function somar(a, b) {
    let soma = a + b;
    resultado.innerHTML = soma.toFixed(7);
}
function subtrair(a, b) {
    let subtracao = a - b;
    resultado.innerHTML = subtracao.toFixed(7);
}
function multiplicar(a, b) {
    let multiplicacao = a * b;
    resultado.innerHTML = multiplicacao.toFixed(7);
}
function dividir(a, b) {
    let divisao = a / b;
    resultado.innerHTML = divisao.toFixed(7);
}

soma.addEventListener("click", function() {
    let valor1 = document.querySelector("#valor1").value;
    let valor2 = document.querySelector("#valor2").value;
    somar(Number(valor1), Number(valor2));
});

subtracao.addEventListener("click", function() {
    let valor1 = document.querySelector("#valor1").value;
    let valor2 = document.querySelector("#valor2").value;
    subtrair(Number(valor1), Number(valor2));
});

multiplicacao.addEventListener("click", function() {
    let valor1 = document.querySelector("#valor1").value;
    let valor2 = document.querySelector("#valor2").value;
    multiplicar(Number(valor1), Number(valor2));
});

divisao.addEventListener("click", function() {
    let valor1 = document.querySelector("#valor1").value;
    let valor2 = document.querySelector("#valor2").value;
    dividir(Number(valor1), Number(valor2));
});
