const botoesDetalhes = document.querySelectorAll(".btn-ver-detalhes");

const modalImg = document.getElementById("modalProdutoImg");
const modalNome = document.getElementById("modalProdutoNome");
const modalPreco = document.getElementById("modalProdutoPreco");
const modalDescricao = document.getElementById("modalProdutoDescricao");

botoesDetalhes.forEach(function (botao) {
    botao.addEventListener("click", function () {
        const nome = botao.getAttribute("data-nome");
        const preco = botao.getAttribute("data-preco");
        const img = botao.getAttribute("data-img");
        const descricao = botao.getAttribute("data-descricao");

        modalImg.src = img;
        modalImg.alt = nome;
        modalNome.textContent = nome;
        modalPreco.textContent = preco;
        modalDescricao.textContent = descricao;
    });
});