const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
let cartaoAtual = 0;
const cartoes = document.querySelectorAll('.cartao');


btnAvancar.addEventListener('click', function () {
    const ehPrimeiroCartao = cartaoAtual === 0;
    if (cartaoAtual === cartoes.length - 1)return
    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao();

});

btnVoltar.addEventListener('click', function () {
    const ehUltimoCartao = cartaoAtual === 0;
    if(cartaoAtual === 0) return
    esconderCataoSelecionado();
    cartaoAtual--;
    mostrarCartao();


});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add('selecionado');
}

function esconderCataoSelecionado() {
    const cartaoselecionado = document.querySelector('.selecionado');
    cartaoselecionado.classList.remove('selecionado');
}

function esconderCartaoSelecionado() {
    const cartaoselecionado = document.querySelector('.selecionado');
    cartaoselecionado.classList.remove('selecionado');
}

