function inserirNumero(num) {
    document.querySelector('.resultado').innerHTML += num;
}
function limparTela() {
    document.querySelector('.resultado').innerHTML = '';
}
function calculate() {
    const expressao = document.querySelector('.resultado').innerHTML;
    // Lembrar: Try | catch será usada para realizar ou bloquear uma ação, nesse caso será usado para permitir a conta, ou bloquear caso o usuário utilize algarismos que não irá funcionar na calculadora.
    try {
        let resultado = eval(expressao); // Lembrar: Eval será usada para que o sistema receba o sinal da conta, e aplicará na conta descrita pelo usuário
        document.querySelector('.resultado').innerHTML = resultado;
    } catch (error) {
        document.querySelector('.resultado').innerHTML = 'Erro';
    }
}
